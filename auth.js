import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getRedirectResult,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";
import {
  doc,
  getFirestore,
  runTransaction,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

function startAuth() {
  const page = document.body.dataset.authPage;
  let app;
  let auth;
  let db;

  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (error) {
    console.error("Firebase could not be initialized.", error);
    showStartupError(page);
    return;
  }

  let profilePromiseUid = "";
  let profilePromise = null;
  let signInCompletionStarted = false;
  let authAttemptInProgress = false;
  let isCreatingAccount = false;

  function getOrCreateStudentProfile(user) {
    if (profilePromise && profilePromiseUid === user.uid) {
      return profilePromise;
    }

    profilePromiseUid = user.uid;
    const profileRef = doc(db, "users", user.uid);
    profilePromise = runTransaction(db, async (transaction) => {
      const savedProfile = await transaction.get(profileRef);
      if (savedProfile.exists()) {
        return savedProfile.data();
      }

      const profile = {
        uid: user.uid,
        name: user.displayName || "",
        email: user.email || "",
        photoURL: user.photoURL || "",
        createdAt: serverTimestamp()
      };
      transaction.set(profileRef, profile);
      return profile;
    }).catch((error) => {
      profilePromise = null;
      profilePromiseUid = "";
      throw error;
    });

    return profilePromise;
  }

  function showMessage(message, isError = false) {
    const element = document.getElementById(
      page === "signin" ? "authMessage" : "dashboardAuthNotice"
    );
    if (!element) return;
    element.textContent = message;
    element.hidden = !message;
    element.classList.toggle("is-error", isError);
  }

  function setAuthBusy(isBusy, action = "") {
    const googleButton = document.getElementById("googleSignInButton");
    const emailForm = document.getElementById("emailAuthForm");
    const emailSubmitButton = document.getElementById("emailSubmitButton");
    const forgotPasswordButton = document.getElementById("forgotPasswordButton");
    const modeToggle = document.getElementById("authModeToggle");

    if (googleButton) {
      googleButton.disabled = isBusy;
      googleButton.setAttribute("aria-busy", String(isBusy));
      const label = googleButton.querySelector("[data-signin-label]");
      if (label) {
        label.textContent = isBusy && action === "google"
          ? "Connecting to Google..."
          : "Continue with Google";
      }
    }

    if (emailForm) {
      emailForm.querySelectorAll("input").forEach((input) => {
        input.disabled = isBusy || (input.id === "confirmPassword" && !isCreatingAccount);
      });
    }

    if (emailSubmitButton) {
      emailSubmitButton.disabled = isBusy;
      const label = emailSubmitButton.querySelector("[data-email-submit-label]");
      if (label) {
        if (isBusy && action === "register") {
          label.textContent = "Creating account...";
        } else if (isBusy && action === "email") {
          label.textContent = "Signing in...";
        } else {
          label.textContent = isCreatingAccount ? "Create account" : "Sign in with email";
        }
      }
    }

    if (forgotPasswordButton) {
      forgotPasswordButton.disabled = isBusy;
      forgotPasswordButton.textContent = isBusy && action === "reset"
        ? "Sending reset email..."
        : "Forgot password?";
    }

    if (modeToggle) modeToggle.disabled = isBusy;
  }

  function setFormMode(createAccount) {
    isCreatingAccount = createAccount;
    const title = document.getElementById("authTitle");
    const description = document.getElementById("authDescription");
    const confirmField = document.getElementById("confirmPasswordField");
    const confirmInput = document.getElementById("confirmPassword");
    const passwordInput = document.getElementById("authPassword");
    const forgotButton = document.getElementById("forgotPasswordButton");
    const modeText = document.getElementById("authModeText");
    const modeToggle = document.getElementById("authModeToggle");

    if (title) {
      title.textContent = createAccount
        ? "Create your student account."
        : "Welcome to your study space.";
    }
    if (description) {
      description.textContent = createAccount
        ? "Create an account with your email and password to start using your student dashboard."
        : "Sign in with Google or your email and password to continue to your personal student dashboard.";
    }
    if (confirmField) confirmField.hidden = !createAccount;
    if (confirmInput) {
      confirmInput.disabled = !createAccount;
      confirmInput.required = createAccount;
    }
    if (passwordInput) {
      passwordInput.autocomplete = createAccount ? "new-password" : "current-password";
    }
    if (forgotButton) forgotButton.hidden = createAccount;
    if (modeText) {
      modeText.textContent = createAccount
        ? "Already have an account?"
        : "New to StudySpace?";
    }
    if (modeToggle) {
      modeToggle.textContent = createAccount ? "Sign in" : "Create an account";
    }

    const submitLabel = document.querySelector("[data-email-submit-label]");
    if (submitLabel) {
      submitLabel.textContent = createAccount ? "Create account" : "Sign in with email";
    }
  }

  function validateEmailForm() {
    const emailInput = document.getElementById("authEmail");
    const passwordInput = document.getElementById("authPassword");
    const confirmInput = document.getElementById("confirmPassword");
    if (!emailInput || !passwordInput || !confirmInput) {
      showMessage("The email sign-in form is unavailable. Reload the page and try again.", true);
      return false;
    }

    emailInput.value = emailInput.value.trim();
    if (!emailInput.value || !emailInput.checkValidity()) {
      showMessage("Enter a valid email address.", true);
      emailInput.reportValidity();
      emailInput.focus();
      return false;
    }
    if (!passwordInput.value) {
      showMessage("Enter your password.", true);
      passwordInput.focus();
      return false;
    }
    if (isCreatingAccount && passwordInput.value.length < 6) {
      showMessage("Choose a password with at least 6 characters.", true);
      passwordInput.focus();
      return false;
    }
    if (isCreatingAccount && !confirmInput.value) {
      showMessage("Confirm your password.", true);
      confirmInput.focus();
      return false;
    }
    if (isCreatingAccount && passwordInput.value !== confirmInput.value) {
      showMessage("The passwords do not match.", true);
      confirmInput.focus();
      return false;
    }
    return true;
  }

  function completeSignIn(user, pendingMessage = "Preparing your student profile...") {
    if (signInCompletionStarted) return;
    signInCompletionStarted = true;
    authAttemptInProgress = false;
    setAuthBusy(true, "profile");
    showMessage(pendingMessage);
    getOrCreateStudentProfile(user)
      .then(() => window.location.replace("index.html"))
      .catch((error) => {
        console.error("Unable to load or create the student profile.", error);
        signInCompletionStarted = false;
        setAuthBusy(false);
        showMessage(profileErrorMessage(error), true);
      });
  }

  function initializeSignInPage() {
    const button = document.getElementById("googleSignInButton");
    const emailForm = document.getElementById("emailAuthForm");
    const modeToggle = document.getElementById("authModeToggle");
    const forgotPasswordButton = document.getElementById("forgotPasswordButton");
    if (!button || !emailForm || !modeToggle || !forgotPasswordButton) {
      showMessage("The sign-in form is unavailable. Reload the page and try again.", true);
      return;
    }

    setFormMode(false);

    button.addEventListener("click", async () => {
      authAttemptInProgress = true;
      setAuthBusy(true, "google");
      showMessage("Connecting to Google...");
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      try {
        if (window.matchMedia("(max-width: 820px), (pointer: coarse)").matches) {
          await signInWithRedirect(auth, provider);
          return;
        }

        const credential = await signInWithPopup(auth, provider);
        completeSignIn(credential.user);
      } catch (error) {
        authAttemptInProgress = false;
        console.error("Google sign-in failed.", error);
        setAuthBusy(false);
        showMessage(authErrorMessage(error, "google"), true);
      }
    });

    emailForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!validateEmailForm()) return;

      const email = document.getElementById("authEmail").value;
      const password = document.getElementById("authPassword").value;
      const createAccount = isCreatingAccount;
      const action = createAccount ? "register" : "email";
      authAttemptInProgress = true;
      setAuthBusy(true, action);
      showMessage(createAccount ? "Creating your account..." : "Signing in...");

      try {
        const credential = createAccount
          ? await createUserWithEmailAndPassword(auth, email, password)
          : await signInWithEmailAndPassword(auth, email, password);
        completeSignIn(
          credential.user,
          createAccount
            ? "Account created. Preparing your student profile..."
            : "Signed in. Preparing your student profile..."
        );
      } catch (error) {
        authAttemptInProgress = false;
        console.error(createAccount ? "Email account creation failed." : "Email sign-in failed.", error);
        setAuthBusy(false);
        showMessage(authErrorMessage(error, "email"), true);
      }
    });

    modeToggle.addEventListener("click", () => {
      setFormMode(!isCreatingAccount);
      showMessage("");
    });

    forgotPasswordButton.addEventListener("click", async () => {
      const emailInput = document.getElementById("authEmail");
      if (!emailInput || !emailInput.value.trim() || !emailInput.checkValidity()) {
        showMessage("Enter a valid email address first so we know where to send the reset link.", true);
        if (emailInput) {
          emailInput.reportValidity();
          emailInput.focus();
        }
        return;
      }

      const email = emailInput.value.trim();
      emailInput.value = email;
      setAuthBusy(true, "reset");
      showMessage("Requesting a password reset email...");
      try {
        await sendPasswordResetEmail(auth, email);
        showMessage("If an account exists for that address, a password reset email has been sent.");
      } catch (error) {
        console.error("Password reset request failed.", error);
        if (error && error.code === "auth/user-not-found") {
          showMessage("If an account exists for that address, a password reset email has been sent.");
        } else {
          showMessage(authErrorMessage(error, "email"), true);
        }
      } finally {
        setAuthBusy(false);
      }
    });

    getRedirectResult(auth).catch((error) => {
      authAttemptInProgress = false;
      console.error("Google sign-in redirect failed.", error);
      setAuthBusy(false);
      showMessage(authErrorMessage(error, "google"), true);
    });

    onAuthStateChanged(
      auth,
      (user) => {
        if (!user) {
          if (!authAttemptInProgress) setAuthBusy(false);
          return;
        }
        completeSignIn(user);
      },
      (error) => {
        authAttemptInProgress = false;
        console.error("Unable to determine the sign-in state.", error);
        setAuthBusy(false);
        showMessage(authErrorMessage(error), true);
      }
    );
  }

  function renderStudentProfile(profile, user) {
    const name = profile.name || user.displayName || "Student";
    const email = profile.email || user.email || "";
    const photoURL = profile.photoURL || user.photoURL || "";
    const nameElement = document.getElementById("profileName");
    const emailElement = document.getElementById("profileEmail");
    const avatar = document.getElementById("studentAvatar");
    const photo = document.getElementById("profilePhoto");

    if (nameElement) nameElement.textContent = name;
    if (emailElement) emailElement.textContent = email;

    if (avatar) {
      avatar.textContent = name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part.charAt(0).toUpperCase())
        .join("") || "S";
      avatar.hidden = true;
    }

    if (photo) {
      let isSafePhotoUrl = false;
      try {
        isSafePhotoUrl = new URL(photoURL).protocol === "https:";
      } catch {
        isSafePhotoUrl = false;
      }

      if (isSafePhotoUrl) {
        photo.alt = `${name}'s profile photo`;
        photo.src = photoURL;
        photo.hidden = false;
        photo.onerror = () => {
          photo.hidden = true;
          if (avatar) avatar.hidden = false;
        };
      } else {
        photo.removeAttribute("src");
        photo.hidden = true;
        if (avatar) avatar.hidden = false;
      }
    }
  }

  function initializeDashboardPage() {
    const appShell = document.getElementById("appShell");
    const loading = document.getElementById("authLoading");
    const loadingMessage = document.getElementById("authLoadingMessage");
    const retryLink = document.getElementById("authRetryLink");
    const logoutButton = document.getElementById("logoutButton");

    function showDashboard() {
      if (appShell) appShell.hidden = false;
      if (loading) loading.hidden = true;
    }

    onAuthStateChanged(
      auth,
      (user) => {
        if (!user) {
          window.location.replace("signin.html");
          return;
        }

        getOrCreateStudentProfile(user)
          .then((profile) => {
            renderStudentProfile(profile, user);
            showMessage("");
            showDashboard();
          })
          .catch((error) => {
            console.error("Unable to load or create the student profile.", error);
            renderStudentProfile({
              name: user.displayName || "",
              email: user.email || "",
              photoURL: user.photoURL || ""
            }, user);
            showMessage(profileErrorMessage(error), true);
            showDashboard();
          });
      },
      (error) => {
        console.error("Unable to determine the sign-in state.", error);
        if (loadingMessage) {
          loadingMessage.textContent = authErrorMessage(error);
        }
        if (retryLink) retryLink.hidden = false;
      }
    );

    if (logoutButton) {
      logoutButton.addEventListener("click", async () => {
        logoutButton.disabled = true;
        try {
          await signOut(auth);
        } catch (error) {
          console.error("Unable to sign out.", error);
          logoutButton.disabled = false;
          showMessage("Sign-out failed. Check your connection and try again.", true);
        }
      });
    }
  }

  if (page === "signin") {
    initializeSignInPage();
  } else if (page === "dashboard") {
    initializeDashboardPage();
  } else {
    showStartupError(page);
  }
}

function showStartupError(page) {
  console.error("Check firebase-config.js and reload the page.");
  const message = page === "signin"
    ? document.getElementById("authMessage")
    : document.getElementById("authLoadingMessage");
  if (message) {
    message.textContent = "Firebase could not start. Check firebase-config.js and reload the page.";
    message.hidden = false;
  }
  const retryLink = document.getElementById("authRetryLink");
  if (retryLink) retryLink.hidden = false;
}

function authErrorMessage(error, method = "general") {
  switch (error && error.code) {
    case "auth/configuration-not-found":
      return "Firebase Authentication is not configured for this project yet. Enable the requested sign-in provider in Firebase Console.";
    case "auth/unauthorized-domain":
      return "This website address is not authorized in Firebase Authentication settings.";
    case "auth/operation-not-allowed":
      return method === "email"
        ? "Email/password sign-in is not enabled for this Firebase project yet."
        : "Google sign-in is not enabled for this Firebase project yet.";
    case "auth/email-already-in-use":
      return "An account already uses this email. Switch to sign-in instead.";
    case "auth/invalid-email":
    case "auth/missing-email":
      return "Enter a valid email address.";
    case "auth/weak-password":
      return "Choose a stronger password with at least 6 characters.";
    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "The email or password is incorrect. Check your details or reset your password.";
    case "auth/user-disabled":
      return "This account has been disabled. Contact the site administrator.";
    case "auth/too-many-requests":
      return "There have been too many attempts. Wait a little and try again.";
    case "auth/missing-password":
      return "Enter your password.";
    case "auth/popup-closed-by-user":
      return "The Google sign-in window was closed before sign-in finished.";
    case "auth/popup-blocked":
      return "Your browser blocked the Google sign-in window. Allow pop-ups and try again.";
    case "auth/network-request-failed":
      return "A network error interrupted sign-in. Check your connection and try again.";
    default:
      return method === "email"
        ? "Email authentication could not be completed. Check your Firebase settings and try again."
        : method === "google"
          ? "Google sign-in could not be completed. Check your Firebase settings and try again."
          : "Authentication could not be completed. Check your connection and Firebase settings.";
  }
}

function profileErrorMessage(error) {
  if (error && error.code === "permission-denied") {
    return "Your profile was blocked by Firestore rules. Deploy firestore.rules and try again.";
  }
  if (error && error.code === "unavailable") {
    return "Firestore is temporarily unavailable. Check your connection and try again.";
  }
  return "Your profile could not be loaded or saved. Check that Firestore is enabled and its rules are deployed.";
}

startAuth();
