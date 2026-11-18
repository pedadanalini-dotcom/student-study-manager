# Student Study Manager and Study Guide

A responsive, browser-based study workspace for organizing study sessions, tracking progress, keeping notes, and exploring programming learning paths. The project uses plain HTML, CSS, and JavaScript for the interface and Firebase Authentication and Cloud Firestore for student sign-in and profile storage.

## Project objectives

- Give students one place to plan and review their study work.
- Make study planning, progress, learning resources, and notes easy to navigate.
- Provide responsive layouts for desktop, tablet, and mobile screens.
- Keep the front end beginner-friendly and avoid a framework or build system.
- Support Google and email/password authentication with private, UID-based student profiles.

## Features

- **Dashboard:** Displays a welcome area, current date, subject and task summaries, study progress, today's schedule, and upcoming tasks.
- **Study planner:** Create, edit, delete, and complete study tasks with a subject, topic, date, start time, and duration.
- **Weekly timetable:** Manage study entries for Monday through Sunday, including subject, time, and duration.
- **Progress tracker:** Calculates overall and subject-wise progress from saved study topics and completed tasks, with visual progress bars.
- **Study guide:** Learning paths for C, Python, Java, JavaScript, and HTML/CSS, including topics, project ideas, practice platforms, and learning resources. Guide topics can be marked complete.
- **Personal notes:** Add, edit, delete, and search notes associated with a subject.
- **Authentication:** Continue with Google or use email/password to sign in or create an account. Includes password confirmation during registration, password-reset requests, and logout.
- **Student profiles:** Creates or retrieves a profile in Cloud Firestore at `users/{uid}` after authentication. Existing profiles are not replaced.
- **Responsive navigation and layout:** Adapts the sidebar, cards, forms, and timetable for mobile, tablet, and desktop screens.

### Data storage

Firebase Authentication manages sign-in credentials and sessions; this application does not store passwords. Firestore is used for student profile documents. Study planner, timetable, study guide completion, and notes data remain in the browser's `localStorage`; they are not synchronized to Firestore or separated by Firebase account. Students sharing a browser profile may therefore see the same locally saved study data.

## Technologies used

- HTML5
- CSS3, including responsive media queries
- JavaScript (ES modules)
- Browser `localStorage` for study data
- Firebase Authentication (Google and email/password)
- Cloud Firestore for student profiles
- Firebase modular JavaScript SDK loaded from Google's CDN

## Project folder structure

```text
student-study-manager/
├── index.html           # Student dashboard and study modules
├── signin.html          # Google and email/password sign-in page
├── style.css            # Dashboard, authentication, and responsive styles
├── script.js            # Study planner, timetable, progress, guide, and notes
├── auth.js              # Firebase authentication and profile handling
├── firebase-config.js   # Firebase Web app configuration
├── firestore.rules      # Firestore profile access rules
├── README.md            # Project documentation
└── .gitignore           # Files excluded from version control
```

## Installation and Firebase setup

### Requirements

- A modern web browser and an internet connection.
- A Firebase project with a registered Web app.
- The Firebase Web app configuration in `firebase-config.js`.

No package installation or compilation is required. Do not put Firebase service-account credentials or private keys in this browser project.

### Configure Firebase

1. In Firebase Console, enable **Google** and **Email/Password** in **Authentication → Sign-in method**.
2. Create a Cloud Firestore database.
3. Add the development host you will use (such as `localhost`) under **Authentication → Settings → Authorized domains**.
4. Publish the rules from `firestore.rules` in **Firestore Database → Rules**. The rules restrict profile access to the matching authenticated UID.
5. Confirm that `firebase-config.js` contains the configuration for the same Firebase project. If Firebase reports that Authentication is not configured, check the selected project and its enabled providers.

## How to run the project

Firebase modules and authentication require an HTTP origin; opening the HTML files directly with `file://` is not supported.

1. Open a terminal in the project folder.
2. Start a simple local server. On Windows, for example:

   ```powershell
   py -m http.server 8000
   ```

   If `py` is not available, use another local HTTP server such as the VS Code Live Server extension.

3. Open `http://localhost:8000/signin.html` in your browser.
4. Sign in with Google or with an email/password account. After authentication, the app opens the existing dashboard.
5. Stop the local server with **Ctrl+C** when finished.

## Future enhancements

The following are potential improvements and are not currently implemented:

- Store study tasks, timetable entries, guide completion, and notes in Firestore, scoped to each student's UID.
- Synchronize study data across devices and provide data export or backup.
- Add profile editing, including a display name for email/password accounts.
- Add automated tests for authentication and study workflows.
