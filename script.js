(() => {
  "use strict";

  const STORAGE_KEY = "studySpace.dashboard.v1";
  const studyGuideLanguages = [
    {
      id: "c",
      name: "C",
      tagline: "Foundations and memory",
      badge: "C",
      introduction: "C is a compiled, procedural language that teaches how programs work close to the machine. It is a useful starting point for understanding types, memory, and problem-solving fundamentals.",
      topics: [
        { id: "c-program-structure", title: "Program structure", description: "Understand main(), headers, statements, and compiling a small program." },
        { id: "c-types-variables", title: "Types and variables", description: "Work with integers, floating-point values, characters, constants, and input." },
        { id: "c-control-flow", title: "Conditions and loops", description: "Use if/else, switch, for, and while to control a program." },
        { id: "c-functions", title: "Functions", description: "Break a problem into reusable functions with parameters and return values." },
        { id: "c-arrays-strings", title: "Arrays and strings", description: "Store related values and process null-terminated character arrays." },
        { id: "c-pointers", title: "Pointers and memory", description: "Learn addresses, pointers, structs, and safe dynamic memory basics." }
      ],
      sequence: ["Write and compile a small program; learn variables and input.", "Practice expressions, conditions, and loops.", "Write functions, then work with arrays and strings.", "Study pointers and structs; build a small multi-file program."],
      projects: ["Command-line unit converter", "Number guessing game", "Contact list using structs"],
      practice: [
        { label: "Exercism C track", url: "https://exercism.org/tracks/c" },
        { label: "HackerRank C challenges", url: "https://www.hackerrank.com/domains/c" }
      ],
      resources: [
        { label: "learn-c.org interactive tutorial", url: "https://www.learn-c.org/" },
        { label: "Harvard CS50x", url: "https://cs50.harvard.edu/x/" }
      ]
    },
    {
      id: "python",
      name: "Python",
      tagline: "Readable, general-purpose code",
      badge: "Py",
      introduction: "Python is a readable, general-purpose language used in automation, data work, web development, and more. Its clear syntax lets beginners focus on problem-solving while learning core programming ideas.",
      topics: [
        { id: "python-values", title: "Values and variables", description: "Use strings, numbers, booleans, input, and type conversion." },
        { id: "python-control-flow", title: "Conditions and loops", description: "Make decisions with if/elif/else and repeat work with for and while." },
        { id: "python-functions", title: "Functions", description: "Define reusable functions, parameters, return values, and scope." },
        { id: "python-collections", title: "Lists and dictionaries", description: "Store, search, update, and iterate through collections of data." },
        { id: "python-files", title: "Files and exceptions", description: "Read and write files and handle expected errors with try/except." },
        { id: "python-modules", title: "Modules and testing", description: "Organize code into modules and check behavior with simple tests." }
      ],
      sequence: ["Practice expressions, strings, numbers, and input/output.", "Learn conditionals, loops, and functions.", "Use lists, dictionaries, and comprehensions for data.", "Read files, handle errors, and split a project into modules."],
      projects: ["Quiz game with a score", "Command-line to-do list", "Expense tracker that saves to a file"],
      practice: [
        { label: "Exercism Python track", url: "https://exercism.org/tracks/python" },
        { label: "HackerRank Python challenges", url: "https://www.hackerrank.com/domains/python" }
      ],
      resources: [
        { label: "The official Python tutorial", url: "https://docs.python.org/3/tutorial/" },
        { label: "CS50's Introduction to Programming with Python", url: "https://cs50.harvard.edu/python/" }
      ]
    },
    {
      id: "java",
      name: "Java",
      tagline: "Object-oriented programming",
      badge: "J",
      introduction: "Java is a strongly typed, object-oriented language that runs on the Java Virtual Machine. It is widely used for backend systems, Android development, and learning structured application design.",
      topics: [
        { id: "java-basics", title: "Syntax and types", description: "Write a class with main(), declare variables, and use primitive types." },
        { id: "java-control-flow", title: "Conditions and loops", description: "Use boolean expressions, if/switch, and for/while loops." },
        { id: "java-methods", title: "Methods and arrays", description: "Create methods with parameters and return values; store values in arrays." },
        { id: "java-classes", title: "Classes and objects", description: "Model data and behavior with fields, constructors, and methods." },
        { id: "java-collections", title: "Collections and generics", description: "Use List, Map, and type parameters to manage groups of objects." },
        { id: "java-errors", title: "Exceptions and testing", description: "Handle errors clearly and verify methods with small tests." }
      ],
      sequence: ["Set up a JDK and run a class with main().", "Practice types, expressions, conditionals, loops, and methods.", "Learn classes, objects, constructors, and encapsulation.", "Use collections, exceptions, and tests in a small application."],
      projects: ["Console-based flashcard quiz", "Library book tracker", "Simple banking simulator"],
      practice: [
        { label: "Exercism Java track", url: "https://exercism.org/tracks/java" },
        { label: "CodingBat Java exercises", url: "https://codingbat.com/java" }
      ],
      resources: [
        { label: "Dev.java learning tutorials", url: "https://dev.java/learn/" },
        { label: "Harvard CS50x", url: "https://cs50.harvard.edu/x/" }
      ]
    },
    {
      id: "javascript",
      name: "JavaScript",
      tagline: "Interactive web programming",
      badge: "JS",
      introduction: "JavaScript is the programming language of the web. It adds behavior to web pages and also runs outside the browser, making it a practical next step after learning HTML and CSS.",
      topics: [
        { id: "js-values", title: "Values and operators", description: "Work with strings, numbers, booleans, comparisons, and conversions." },
        { id: "js-control-flow", title: "Conditions and loops", description: "Use if/else, switch, for, and while to direct program flow." },
        { id: "js-functions", title: "Functions and scope", description: "Write functions, understand scope, and use arrow functions appropriately." },
        { id: "js-arrays-objects", title: "Arrays and objects", description: "Represent data and transform collections with common array methods." },
        { id: "js-dom", title: "DOM and events", description: "Select page elements, respond to events, and update the interface." },
        { id: "js-async", title: "Async JavaScript", description: "Understand promises, async/await, and requesting data." }
      ],
      sequence: ["Learn syntax, values, operators, and conditionals.", "Practice loops, functions, arrays, and objects.", "Use the DOM and events to build interactive pages.", "Explore modules and asynchronous code after the basics."],
      projects: ["Interactive quiz", "Browser-based habit tracker", "Weather dashboard using a public API"],
      practice: [
        { label: "Exercism JavaScript track", url: "https://exercism.org/tracks/javascript" },
        { label: "freeCodeCamp JavaScript curriculum", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/" }
      ],
      resources: [
        { label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
        { label: "The Modern JavaScript Tutorial", url: "https://javascript.info/" }
      ]
    },
    {
      id: "html-css",
      name: "HTML and CSS",
      tagline: "Structure and style for the web",
      badge: "Web",
      introduction: "HTML gives web content structure and meaning; CSS controls its appearance and layout. Learn them together to create accessible, responsive pages before adding JavaScript.",
      topics: [
        { id: "web-document", title: "HTML document structure", description: "Use headings, paragraphs, lists, and semantic landmarks." },
        { id: "web-links-media", title: "Links and media", description: "Connect pages and add images with meaningful alternative text." },
        { id: "web-forms", title: "Forms and controls", description: "Build labeled inputs and buttons with native validation." },
        { id: "web-css-basics", title: "CSS selectors and box model", description: "Style elements and understand margin, border, padding, and sizing." },
        { id: "web-layout", title: "Flexbox and Grid", description: "Arrange content using one-dimensional and two-dimensional layouts." },
        { id: "web-responsive", title: "Responsive and accessible design", description: "Use fluid layouts, media queries, contrast, and keyboard-friendly controls." }
      ],
      sequence: ["Create a semantic HTML page with headings, links, and images.", "Add forms and learn labels and accessible structure.", "Style typography, colors, spacing, and the box model with CSS.", "Build layouts with Flexbox/Grid and adapt them for small screens."],
      projects: ["Personal profile page", "Responsive recipe page", "Multi-section study portfolio"],
      practice: [
        { label: "freeCodeCamp Responsive Web Design", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
        { label: "JSFiddle web playground", url: "https://jsfiddle.net/" }
      ],
      resources: [
        { label: "MDN Learn web development", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development" },
        { label: "web.dev Learn HTML", url: "https://web.dev/learn/html/" },
        { label: "web.dev Learn CSS", url: "https://web.dev/learn/css/" }
      ]
    }
  ];
  const today = toDateKey(new Date());
  const starterData = {
    subjects: ["Mathematics", "Biology", "Computer Science", "English", "Physics", "History"],
    timetable: [],
    completedGuideTopics: [],
    notes: [],
    tasks: [
      { id: createId(), title: "Review cell structure notes", subject: "Biology", dueDate: today, completed: false },
      { id: createId(), title: "Practice algebra problems", subject: "Mathematics", dueDate: addDays(today, 1), completed: false },
      { id: createId(), title: "Study arrays and loops", subject: "Computer Science", dueDate: today, completed: false },
      { id: createId(), title: "Outline history essay", subject: "History", dueDate: addDays(today, 2), completed: false },
      { id: createId(), title: "Finish chemistry quiz review", subject: "Biology", dueDate: addDays(today, -1), completed: true },
      { id: createId(), title: "Read a chapter of the novel", subject: "English", dueDate: addDays(today, -2), completed: true }
    ]
  };

  const elements = {
    todayDate: document.getElementById("todayDate"),
    scheduleDate: document.getElementById("scheduleDate"),
    subjectCount: document.getElementById("subjectCount"),
    completedCount: document.getElementById("completedCount"),
    pendingCount: document.getElementById("pendingCount"),
    progressPercent: document.getElementById("progressPercent"),
    ringPercent: document.getElementById("ringPercent"),
    progressRing: document.getElementById("progressRing"),
    progressBar: document.getElementById("progressBar"),
    scheduleList: document.getElementById("scheduleList"),
    taskList: document.getElementById("taskList"),
    completedDetails: document.getElementById("completedDetails"),
    completedSummary: document.getElementById("completedSummary"),
    completedTaskList: document.getElementById("completedTaskList"),
    taskSummary: document.getElementById("taskSummary"),
    taskSubject: document.getElementById("taskSubject"),
    taskDueDate: document.getElementById("taskDueDate"),
    taskForm: document.getElementById("taskForm"),
    taskFormHint: document.getElementById("taskFormHint"),
    plannerForm: document.getElementById("plannerForm"),
    plannerSubject: document.getElementById("plannerSubject"),
    plannerTopic: document.getElementById("plannerTopic"),
    plannerDate: document.getElementById("plannerDate"),
    plannerStartTime: document.getElementById("plannerStartTime"),
    plannerDuration: document.getElementById("plannerDuration"),
    plannerFormTitle: document.getElementById("plannerFormTitle"),
    plannerFormMessage: document.getElementById("plannerFormMessage"),
    plannerSubmit: document.getElementById("plannerSubmit"),
    plannerCancelEdit: document.getElementById("plannerCancelEdit"),
    plannerTaskCount: document.getElementById("plannerTaskCount"),
    plannerTaskList: document.getElementById("plannerTaskList"),
    timetableForm: document.getElementById("timetableForm"),
    timetableDay: document.getElementById("timetableDay"),
    timetableSubject: document.getElementById("timetableSubject"),
    timetableStartTime: document.getElementById("timetableStartTime"),
    timetableDuration: document.getElementById("timetableDuration"),
    timetableFormMessage: document.getElementById("timetableFormMessage"),
    timetableSubmit: document.getElementById("timetableSubmit"),
    timetableCancelEdit: document.getElementById("timetableCancelEdit"),
    timetableDays: document.getElementById("timetableDays"),
    subjectSuggestions: document.getElementById("subjectSuggestions"),
    topicTotal: document.getElementById("topicTotal"),
    topicCompleted: document.getElementById("topicCompleted"),
    topicPending: document.getElementById("topicPending"),
    topicOverallPercent: document.getElementById("topicOverallPercent"),
    topicOverallBar: document.getElementById("topicOverallBar"),
    subjectProgressList: document.getElementById("subjectProgressList"),
    topicProgressList: document.getElementById("topicProgressList"),
    guideLanguageTabs: document.getElementById("guideLanguageTabs"),
    guideContent: document.getElementById("guideContent"),
    guideCompletionSummary: document.getElementById("guideCompletionSummary"),
    noteForm: document.getElementById("noteForm"),
    noteTitle: document.getElementById("noteTitle"),
    noteSubject: document.getElementById("noteSubject"),
    noteDescription: document.getElementById("noteDescription"),
    noteFormTitle: document.getElementById("noteFormTitle"),
    noteFormMessage: document.getElementById("noteFormMessage"),
    noteSubmit: document.getElementById("noteSubmit"),
    noteCancelEdit: document.getElementById("noteCancelEdit"),
    noteCount: document.getElementById("noteCount"),
    notesSearch: document.getElementById("notesSearch"),
    notesList: document.getElementById("notesList"),
    subjectForm: document.getElementById("subjectForm"),
    subjectName: document.getElementById("subjectName"),
    subjectList: document.getElementById("subjectList"),
    liveMessage: document.getElementById("liveMessage"),
    sidebar: document.getElementById("sidebar"),
    sidebarScrim: document.getElementById("sidebarScrim"),
    menuToggle: document.getElementById("menuToggle")
  };

  let data = loadData();
  let editingPlannerTaskId = null;
  let editingTimetableEntryId = null;
  let editingNoteId = null;
  let selectedGuideLanguage = studyGuideLanguages[0].id;
  renderDate();
  renderAll();

  if (!localStorageHasData()) {
    saveData();
  }

  document.querySelectorAll("[data-open-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = document.getElementById(button.dataset.openDialog);
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => button.closest("dialog").close());
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  });

  elements.taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(elements.taskForm);
    const title = String(formData.get("title") || "").trim();
    const dueDate = String(formData.get("dueDate") || "");
    const subject = String(formData.get("subject") || "").trim();

    if (!title || !dueDate) {
      elements.taskFormHint.textContent = "Add a task name and due date to continue.";
      return;
    }

    data.tasks.push({ id: createId(), title, subject: subject || "General study", dueDate, completed: false });
    saveData();
    renderAll();
    elements.taskForm.reset();
    elements.taskDueDate.value = toDateKey(new Date());
    elements.taskFormHint.textContent = "";
    document.getElementById("taskDialog").close();
    announce("Task added.");
  });

  elements.plannerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const subjectName = elements.plannerSubject.value.trim();
    const topic = elements.plannerTopic.value.trim();
    const studyDate = elements.plannerDate.value;
    const startTime = elements.plannerStartTime.value;

    if (!subjectName || !topic || !studyDate || !startTime) {
      setFormMessage(elements.plannerFormMessage, "Complete each field before saving.", true);
      return;
    }

    const subject = addSubject(subjectName);
    const existing = editingPlannerTaskId
      ? data.tasks.find((task) => task.id === editingPlannerTaskId)
      : null;
    const studyTask = {
      id: existing ? existing.id : createId(),
      title: topic,
      topic,
      subject,
      dueDate: studyDate,
      studyDate,
      startTime,
      duration: Number(elements.plannerDuration.value),
      completed: existing ? existing.completed : false,
      studyPlan: true
    };

    if (existing) {
      data.tasks = data.tasks.map((task) => task.id === existing.id ? studyTask : task);
    } else {
      data.tasks.push(studyTask);
    }

    saveData();
    resetPlannerForm();
    renderAll();
    announce(existing ? "Study task updated." : "Study task added.");
  });

  elements.plannerCancelEdit.addEventListener("click", resetPlannerForm);
  elements.plannerTaskList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-planner-action]");
    if (!button) return;

    const task = data.tasks.find((item) => item.id === button.dataset.taskId && item.studyPlan === true);
    if (!task) return;

    if (button.dataset.plannerAction === "toggle") {
      task.completed = !task.completed;
      saveData();
      renderAll();
      announce(task.completed ? "Study task marked complete." : "Study task marked as pending.");
    } else if (button.dataset.plannerAction === "edit") {
      editingPlannerTaskId = task.id;
      elements.plannerSubject.value = task.subject;
      elements.plannerTopic.value = task.topic;
      elements.plannerDate.value = task.studyDate;
      elements.plannerStartTime.value = task.startTime;
      elements.plannerDuration.value = String(task.duration);
      elements.plannerFormTitle.textContent = "Edit study task";
      elements.plannerSubmit.textContent = "Save changes";
      elements.plannerCancelEdit.hidden = false;
      setFormMessage(elements.plannerFormMessage, "");
      elements.plannerForm.scrollIntoView({ behavior: "smooth", block: "center" });
      elements.plannerTopic.focus();
    } else if (button.dataset.plannerAction === "delete") {
      data.tasks = data.tasks.filter((item) => item.id !== task.id);
      if (editingPlannerTaskId === task.id) resetPlannerForm();
      saveData();
      renderAll();
      announce("Study task deleted.");
    }
  });

  elements.timetableForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const subjectName = elements.timetableSubject.value.trim();
    const startTime = elements.timetableStartTime.value;
    if (!subjectName || !startTime) {
      setFormMessage(elements.timetableFormMessage, "Add a subject and start time to continue.", true);
      return;
    }

    const subject = addSubject(subjectName);
    const existing = editingTimetableEntryId
      ? data.timetable.find((entry) => entry.id === editingTimetableEntryId)
      : null;
    const entry = {
      id: existing ? existing.id : createId(),
      day: Number(elements.timetableDay.value),
      subject,
      startTime,
      duration: Number(elements.timetableDuration.value)
    };

    if (existing) {
      data.timetable = data.timetable.map((item) => item.id === existing.id ? entry : item);
    } else {
      data.timetable.push(entry);
    }

    saveData();
    resetTimetableForm();
    renderAll();
    announce(existing ? "Timetable entry updated." : "Timetable entry added.");
  });

  elements.timetableCancelEdit.addEventListener("click", resetTimetableForm);
  elements.timetableDays.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-timetable-action]");
    if (!button) return;

    const entry = data.timetable.find((item) => item.id === button.dataset.entryId);
    if (!entry) return;

    if (button.dataset.timetableAction === "edit") {
      editingTimetableEntryId = entry.id;
      elements.timetableDay.value = String(entry.day);
      elements.timetableSubject.value = entry.subject;
      elements.timetableStartTime.value = entry.startTime;
      elements.timetableDuration.value = String(entry.duration);
      elements.timetableSubmit.textContent = "Save changes";
      elements.timetableCancelEdit.hidden = false;
      setFormMessage(elements.timetableFormMessage, "");
      elements.timetableForm.scrollIntoView({ behavior: "smooth", block: "center" });
      elements.timetableSubject.focus();
    } else if (button.dataset.timetableAction === "delete") {
      data.timetable = data.timetable.filter((item) => item.id !== entry.id);
      if (editingTimetableEntryId === entry.id) resetTimetableForm();
      saveData();
      renderAll();
      announce("Timetable entry deleted.");
    }
  });

  function handleTaskListClick(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const task = data.tasks.find((item) => item.id === button.dataset.taskId);
    if (!task) return;

    if (button.dataset.action === "toggle-task") {
      task.completed = !task.completed;
      saveData();
      renderAll();
      announce(task.completed ? "Task marked complete." : "Task marked as pending.");
    } else if (button.dataset.action === "delete-task") {
      data.tasks = data.tasks.filter((item) => item.id !== task.id);
      saveData();
      renderAll();
      announce("Task removed.");
    }
  }

  elements.taskList.addEventListener("click", handleTaskListClick);
  elements.completedTaskList.addEventListener("click", handleTaskListClick);

  elements.subjectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = elements.subjectName.value.trim();
    if (!name) return;

    const alreadyExists = data.subjects.some((subject) => subject.toLocaleLowerCase() === name.toLocaleLowerCase());
    if (alreadyExists) {
      announce(`${name} is already in your subjects.`);
      elements.subjectName.focus();
      return;
    }

    data.subjects.push(name);
    saveData();
    renderAll();
    elements.subjectForm.reset();
    elements.subjectName.focus();
    announce(`${name} added to your subjects.`);
  });

  elements.subjectList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-subject]");
    if (!button) return;

    const subject = button.dataset.subject;
    const linkedTasks = data.tasks.filter((task) => task.subject === subject).length;
    if (linkedTasks > 0 && !window.confirm(`Remove "${subject}"? ${linkedTasks} task${linkedTasks === 1 ? "" : "s"} will keep this subject name.`)) {
      return;
    }

    data.subjects = data.subjects.filter((item) => item !== subject);
    saveData();
    renderAll();
    announce(`${subject} removed.`);
  });

  elements.guideLanguageTabs.addEventListener("click", (event) => {
    const tab = event.target.closest("button[data-language-id]");
    if (!tab) return;
    selectedGuideLanguage = tab.dataset.languageId;
    renderStudyGuide();
  });

  elements.guideLanguageTabs.addEventListener("keydown", (event) => {
    const tabs = [...elements.guideLanguageTabs.querySelectorAll("button[data-language-id]")];
    const currentIndex = tabs.indexOf(document.activeElement);
    if (currentIndex < 0) return;

    let nextIndex = currentIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (currentIndex + 1) % tabs.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;
    else return;

    event.preventDefault();
    const nextLanguageId = tabs[nextIndex].dataset.languageId;
    tabs[nextIndex].click();
    elements.guideLanguageTabs.querySelector(`button[data-language-id="${nextLanguageId}"]`).focus();
  });

  elements.guideContent.addEventListener("click", (event) => {
    const topicButton = event.target.closest("button[data-topic-id]");
    if (!topicButton) return;

    const topicId = topicButton.dataset.topicId;
    const isComplete = data.completedGuideTopics.includes(topicId);
    data.completedGuideTopics = isComplete
      ? data.completedGuideTopics.filter((id) => id !== topicId)
      : [...data.completedGuideTopics, topicId];
    saveData();
    renderStudyGuide();
    elements.guideContent.querySelector(`button[data-topic-id="${topicId}"]`).focus();
    announce(isComplete ? "Guide topic marked as pending." : "Guide topic marked complete.");
  });

  elements.noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = elements.noteTitle.value.trim();
    const subject = elements.noteSubject.value.trim();
    const description = elements.noteDescription.value.trim();
    if (!title || !subject || !description) {
      setFormMessage(elements.noteFormMessage, "Add a title, subject, and description before saving.", true);
      return;
    }

    const existing = editingNoteId ? data.notes.find((note) => note.id === editingNoteId) : null;
    const now = new Date().toISOString();
    const note = {
      id: existing ? existing.id : createId(),
      title,
      subject,
      description,
      updatedAt: now
    };
    if (existing) {
      data.notes = data.notes.map((item) => item.id === existing.id ? note : item);
    } else {
      data.notes.push(note);
    }

    saveData();
    renderAll();
    resetNoteForm();
    announce(existing ? "Note updated." : "Note saved.");
  });

  elements.noteCancelEdit.addEventListener("click", resetNoteForm);
  elements.notesSearch.addEventListener("input", renderNotes);
  elements.notesList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-note-action]");
    if (!button) return;
    const note = data.notes.find((item) => item.id === button.dataset.noteId);
    if (!note) return;

    if (button.dataset.noteAction === "edit") {
      editingNoteId = note.id;
      elements.noteTitle.value = note.title;
      elements.noteSubject.value = note.subject;
      elements.noteDescription.value = note.description;
      elements.noteFormTitle.textContent = "Edit note";
      elements.noteSubmit.textContent = "Save changes";
      elements.noteCancelEdit.hidden = false;
      setFormMessage(elements.noteFormMessage, "");
      elements.noteTitle.focus();
      elements.noteForm.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else if (button.dataset.noteAction === "delete") {
      data.notes = data.notes.filter((item) => item.id !== note.id);
      if (editingNoteId === note.id) resetNoteForm();
      saveData();
      renderAll();
      announce("Note deleted.");
    }
  });

  document.querySelectorAll(".navigation .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".navigation .nav-link").forEach((item) => {
        item.classList.remove("is-active");
        item.removeAttribute("aria-current");
      });
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
      closeSidebar();
    });
  });

  elements.menuToggle.addEventListener("click", () => {
    const isOpen = elements.sidebar.classList.toggle("is-open");
    elements.sidebarScrim.classList.toggle("is-visible", isOpen);
    elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
    elements.menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  elements.sidebarScrim.addEventListener("click", closeSidebar);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeSidebar();
  });

  function localStorageHasData() {
    try {
      return window.localStorage.getItem(STORAGE_KEY) !== null;
    } catch (error) {
      console.error("Unable to access localStorage.", error);
      announce("Browser storage is unavailable. Changes may not be saved after closing this page.");
      return true;
    }
  }

  function loadData() {
    let raw;
    try {
      raw = window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      console.error("Unable to read study dashboard data.", error);
      announce("Browser storage is unavailable. This session is using sample dashboard data.");
      return copyStarterData();
    }

    if (raw === null) return copyStarterData();

    try {
      const saved = JSON.parse(raw);
      if (!isValidData(saved)) {
        throw new TypeError("Saved dashboard data has an unexpected shape.");
      }
      if (!Array.isArray(saved.timetable)) saved.timetable = [];
      if (!Array.isArray(saved.completedGuideTopics)) saved.completedGuideTopics = [];
      if (!Array.isArray(saved.notes)) saved.notes = [];
      return saved;
    } catch (error) {
      console.error("Unable to parse saved study dashboard data.", error);
      announce("Saved dashboard data could not be read. Sample data is shown for this session.");
      return copyStarterData();
    }
  }

  function isValidData(value) {
    return Boolean(
      value &&
      Array.isArray(value.subjects) &&
      value.subjects.every((subject) => typeof subject === "string") &&
      Array.isArray(value.tasks) &&
      value.tasks.every((task) =>
        task &&
        typeof task.id === "string" &&
        typeof task.title === "string" &&
        typeof task.subject === "string" &&
        typeof task.dueDate === "string" &&
        typeof task.completed === "boolean" &&
        (task.studyPlan !== true || (
          typeof task.topic === "string" &&
          typeof task.studyDate === "string" &&
          typeof task.startTime === "string" &&
          Number.isFinite(task.duration) &&
          task.duration > 0
        ))
      ) &&
      (value.timetable === undefined || (
        Array.isArray(value.timetable) &&
        value.timetable.every((entry) =>
          entry &&
          typeof entry.id === "string" &&
          Number.isInteger(entry.day) &&
          entry.day >= 0 &&
          entry.day <= 6 &&
          typeof entry.subject === "string" &&
          typeof entry.startTime === "string" &&
          Number.isFinite(entry.duration) &&
          entry.duration > 0
        )
      )) &&
      (value.completedGuideTopics === undefined || (
        Array.isArray(value.completedGuideTopics) &&
        value.completedGuideTopics.every((id) => typeof id === "string")
      )) &&
      (value.notes === undefined || (
        Array.isArray(value.notes) &&
        value.notes.every((note) =>
          note &&
          typeof note.id === "string" &&
          typeof note.title === "string" &&
          typeof note.subject === "string" &&
          typeof note.description === "string" &&
          typeof note.updatedAt === "string"
        )
      ))
    );
  }

  function copyStarterData() {
    return {
      subjects: [...starterData.subjects],
      timetable: [...starterData.timetable],
      completedGuideTopics: [...starterData.completedGuideTopics],
      notes: starterData.notes.map((note) => ({ ...note })),
      tasks: starterData.tasks.map((task) => ({ ...task }))
    };
  }

  function saveData() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Unable to save study dashboard data.", error);
      announce("Your change could not be saved in this browser. Check your storage settings.");
    }
  }

  function renderAll() {
    renderStats();
    renderSchedule();
    renderTasks();
    renderPlannerTasks();
    renderTimetable();
    renderProgressTracker();
    renderSubjectOptions();
    renderSubjects();
    renderNoteSubjectOptions();
    renderStudyGuide();
    renderNotes();
  }

  function renderDate() {
    const now = new Date();
    elements.todayDate.textContent = new Intl.DateTimeFormat(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }).format(now);
    elements.scheduleDate.textContent = new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric"
    }).format(now);
    elements.taskDueDate.value = toDateKey(now);
    elements.plannerDate.value = toDateKey(now);
    elements.plannerStartTime.value = defaultStudyTime(now);
  }

  function renderStats() {
    const completed = data.tasks.filter((task) => task.completed).length;
    const pending = data.tasks.length - completed;
    const progress = getTopicProgress().overallPercent;

    elements.subjectCount.textContent = String(data.subjects.length);
    elements.completedCount.textContent = String(completed);
    elements.pendingCount.textContent = String(pending);
    elements.progressPercent.textContent = String(progress);
    elements.ringPercent.textContent = `${progress}%`;
    elements.progressBar.style.width = `${progress}%`;
    elements.progressRing.style.background = `conic-gradient(var(--blue) ${progress}%, #edf1f8 ${progress}%)`;
    elements.progressRing.setAttribute("aria-label", `${progress} percent study progress`);
  }

  function renderSchedule() {
    elements.scheduleList.replaceChildren();
    const sessions = data.tasks
      .filter((task) => task.studyPlan === true && task.studyDate === toDateKey(new Date()))
      .sort((left, right) => left.startTime.localeCompare(right.startTime));

    if (sessions.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state schedule-empty";
      const title = document.createElement("strong");
      title.textContent = "No study sessions planned for today";
      const detail = document.createElement("span");
      detail.textContent = "Choose a topic and set aside time for a focused session.";
      const link = document.createElement("a");
      link.className = "text-button";
      link.href = "#planner";
      link.textContent = "Plan a study session";
      empty.append(title, detail, link);
      elements.scheduleList.append(empty);
      return;
    }

    sessions.forEach((session) => {
      const row = document.createElement("div");
      row.className = `schedule-item${session.completed ? " is-complete" : ""}`;

      const time = document.createElement("span");
      time.className = "schedule-time";
      time.textContent = formatTime(session.startTime);

      const timeline = document.createElement("span");
      timeline.className = "timeline";
      timeline.setAttribute("aria-hidden", "true");
      const dot = document.createElement("span");
      dot.className = "timeline-dot";
      timeline.append(dot);

      const info = document.createElement("div");
      info.className = "schedule-info";
      const title = document.createElement("strong");
      title.textContent = session.topic;
      const detail = document.createElement("span");
      detail.textContent = `${session.subject}${session.completed ? " · Completed" : ""}`;
      info.append(title, detail);

      const duration = document.createElement("span");
      duration.className = "schedule-duration";
      duration.textContent = `${session.duration} min`;
      row.append(time, timeline, info, duration);
      elements.scheduleList.append(row);
    });
  }

  function renderPlannerTasks() {
    elements.plannerTaskList.replaceChildren();
    const tasks = data.tasks
      .filter((task) => task.studyPlan === true)
      .sort((left, right) =>
        left.studyDate.localeCompare(right.studyDate) || left.startTime.localeCompare(right.startTime)
      );
    elements.plannerTaskCount.textContent = `${tasks.length} study task${tasks.length === 1 ? "" : "s"}`;

    if (tasks.length === 0) {
      appendEmptyState(elements.plannerTaskList, "No study tasks yet", "Your saved study tasks will appear here.");
      return;
    }

    tasks.forEach((task) => {
      const row = document.createElement("article");
      row.className = `planner-task-row${task.completed ? " is-complete" : ""}`;

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "planner-task-check";
      toggle.dataset.plannerAction = "toggle";
      toggle.dataset.taskId = task.id;
      toggle.setAttribute("aria-label", `${task.completed ? "Reopen" : "Mark"} ${task.topic}${task.completed ? "" : " complete"}`);
      toggle.setAttribute("aria-pressed", String(task.completed));
      if (task.completed) {
        toggle.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
      }

      const copy = document.createElement("div");
      copy.className = "planner-task-main";
      const title = document.createElement("strong");
      title.textContent = task.topic;
      const description = document.createElement("span");
      description.textContent = `${task.subject} · ${formatShortDate(task.studyDate)} · ${formatTime(task.startTime)} · ${task.duration} min`;
      copy.append(title, description);

      const meta = document.createElement("div");
      meta.className = "planner-task-meta";
      const status = document.createElement("span");
      status.textContent = task.completed ? "Completed" : "Planned";
      const actions = document.createElement("div");
      actions.className = "row-actions";
      actions.append(
        createActionButton("edit", task.id, "Edit", "planner", task.topic),
        createActionButton("delete", task.id, "Delete", "planner", task.topic)
      );
      meta.append(status, actions);
      row.append(toggle, copy, meta);
      elements.plannerTaskList.append(row);
    });
  }

  function renderTimetable() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    elements.timetableDays.replaceChildren();

    days.forEach((dayName, dayIndex) => {
      const entries = data.timetable
        .filter((entry) => entry.day === dayIndex)
        .sort((left, right) => left.startTime.localeCompare(right.startTime));
      const card = document.createElement("section");
      card.className = "day-card";
      const heading = document.createElement("div");
      heading.className = "day-card-heading";
      const name = document.createElement("strong");
      name.textContent = dayName;
      const count = document.createElement("span");
      count.textContent = `${entries.length} ${entries.length === 1 ? "session" : "sessions"}`;
      heading.append(name, count);

      const list = document.createElement("div");
      list.className = "day-entry-list";
      if (entries.length === 0) {
        const empty = document.createElement("div");
        empty.className = "day-empty";
        empty.textContent = "No study blocks yet";
        list.append(empty);
      } else {
        entries.forEach((entry) => {
          const item = document.createElement("article");
          item.className = "day-entry";
          const copy = document.createElement("div");
          copy.className = "day-entry-copy";
          const subject = document.createElement("strong");
          subject.textContent = entry.subject;
          const time = document.createElement("span");
          time.textContent = `${formatTime(entry.startTime)} · ${entry.duration} min`;
          copy.append(subject, time);

          const actions = document.createElement("div");
          actions.className = "row-actions";
          actions.append(
            createActionButton("edit", entry.id, "Edit", "timetable", `${dayName}, ${entry.subject}`),
            createActionButton("delete", entry.id, "Delete", "timetable", `${dayName}, ${entry.subject}`)
          );
          item.append(copy, actions);
          list.append(item);
        });
      }

      card.append(heading, list);
      elements.timetableDays.append(card);
    });
  }

  function renderProgressTracker() {
    const progress = getTopicProgress();
    elements.topicTotal.textContent = String(progress.topics.length);
    elements.topicCompleted.textContent = String(progress.completed);
    elements.topicPending.textContent = String(progress.pending);
    elements.topicOverallPercent.textContent = String(progress.overallPercent);
    elements.topicOverallBar.style.width = `${progress.overallPercent}%`;
    elements.subjectProgressList.replaceChildren();
    elements.topicProgressList.replaceChildren();

    if (progress.topics.length === 0) {
      appendEmptyState(elements.subjectProgressList, "No topic progress yet", "Add a study task in the planner to start tracking topics.");
      appendEmptyState(elements.topicProgressList, "No topics to show", "Your topics will appear here when you plan a study task.");
      return;
    }

    progress.subjects.forEach((subject) => {
      const row = document.createElement("div");
      row.className = "subject-progress-row";
      const header = document.createElement("div");
      header.className = "subject-progress-top";
      const name = document.createElement("strong");
      name.textContent = subject.name;
      const count = document.createElement("span");
      count.textContent = `${subject.completed}/${subject.total} topics · ${subject.percent}%`;
      header.append(name, count);
      const track = document.createElement("div");
      track.className = "progress-track";
      track.setAttribute("role", "progressbar");
      track.setAttribute("aria-label", `${subject.name} progress`);
      track.setAttribute("aria-valuemin", "0");
      track.setAttribute("aria-valuemax", "100");
      track.setAttribute("aria-valuenow", String(subject.percent));
      const fill = document.createElement("span");
      fill.style.width = `${subject.percent}%`;
      track.append(fill);
      row.append(header, track);
      elements.subjectProgressList.append(row);
    });

    progress.topics.forEach((topic) => {
      const row = document.createElement("div");
      row.className = "topic-progress-row";
      const copy = document.createElement("div");
      copy.className = "topic-progress-copy";
      const name = document.createElement("strong");
      name.textContent = topic.name;
      const subject = document.createElement("span");
      subject.textContent = `${topic.subject} · ${topic.completedSessions}/${topic.sessions.length} sessions complete`;
      copy.append(name, subject);
      const status = document.createElement("span");
      status.className = `topic-status${topic.isComplete ? " is-complete" : ""}`;
      status.textContent = topic.isComplete ? "Completed" : "Pending";
      row.append(copy, status);
      elements.topicProgressList.append(row);
    });
  }

  function renderStudyGuide() {
    elements.guideLanguageTabs.replaceChildren();
    const allTopics = studyGuideLanguages.flatMap((language) => language.topics);
    const completedCount = allTopics.filter((topic) =>
      data.completedGuideTopics.includes(topic.id)
    ).length;
    elements.guideCompletionSummary.textContent =
      `${completedCount} of ${allTopics.length} guide topics complete`;

    studyGuideLanguages.forEach((language) => {
      const completed = language.topics.filter((topic) =>
        data.completedGuideTopics.includes(topic.id)
      ).length;
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "guide-language-option";
      tab.dataset.languageId = language.id;
      tab.id = `guide-tab-${language.id}`;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", "guideContent");
      tab.setAttribute("aria-selected", String(language.id === selectedGuideLanguage));
      tab.tabIndex = language.id === selectedGuideLanguage ? 0 : -1;
      const name = document.createElement("strong");
      name.textContent = language.name;
      const progress = document.createElement("span");
      progress.textContent = `${completed}/${language.topics.length} topics complete`;
      tab.append(name, progress);
      elements.guideLanguageTabs.append(tab);
    });

    const language = studyGuideLanguages.find((item) => item.id === selectedGuideLanguage);
    if (!language) return;
    elements.guideContent.setAttribute("aria-labelledby", `guide-tab-${language.id}`);
    elements.guideContent.replaceChildren();

    const intro = document.createElement("div");
    intro.className = "guide-intro";
    const badge = document.createElement("span");
    badge.className = "guide-language-badge";
    badge.setAttribute("aria-hidden", "true");
    badge.textContent = language.badge;
    const introText = document.createElement("p");
    introText.textContent = language.introduction;
    intro.append(badge, introText);

    const columns = document.createElement("div");
    columns.className = "guide-columns";
    const topicsSection = createGuideSection("Important topics");
    const topicsNote = document.createElement("p");
    topicsNote.className = "section-note";
    topicsNote.textContent = "Select a topic card to update your saved learning progress.";
    const topicGrid = document.createElement("div");
    topicGrid.className = "guide-topic-grid";
    language.topics.forEach((topic) => {
      const isComplete = data.completedGuideTopics.includes(topic.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `guide-topic-card${isComplete ? " is-complete" : ""}`;
      button.dataset.topicId = topic.id;
      button.setAttribute("role", "checkbox");
      button.setAttribute("aria-checked", String(isComplete));
      button.setAttribute("aria-label", `${isComplete ? "Mark as not completed" : "Mark as completed"}: ${topic.title}`);
      const check = document.createElement("span");
      check.className = "guide-topic-check";
      check.setAttribute("aria-hidden", "true");
      check.textContent = isComplete ? "✓" : "";
      const copy = document.createElement("span");
      copy.className = "guide-topic-copy";
      const title = document.createElement("strong");
      title.textContent = topic.title;
      const description = document.createElement("span");
      description.textContent = topic.description;
      copy.append(title, description);
      button.append(check, copy);
      topicGrid.append(button);
    });
    topicsSection.append(topicsNote, topicGrid);

    const sideColumn = document.createElement("div");
    sideColumn.className = "guide-side-column";
    const sequenceSection = createGuideSection("Learning sequence");
    const sequence = document.createElement("ol");
    sequence.className = "guide-ordered-list";
    language.sequence.forEach((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      sequence.append(item);
    });
    sequenceSection.append(sequence);
    const projectsSection = createGuideSection("Beginner projects");
    const projects = document.createElement("ul");
    projects.className = "guide-project-list";
    language.projects.forEach((project) => {
      const item = document.createElement("li");
      item.textContent = project;
      projects.append(item);
    });
    projectsSection.append(projects);
    sideColumn.append(sequenceSection, projectsSection);
    columns.append(topicsSection, sideColumn);

    const resourceGrid = document.createElement("div");
    resourceGrid.className = "guide-resource-grid";
    resourceGrid.append(
      createGuideLinkSection("Practice platforms", language.practice),
      createGuideLinkSection("Free learning resources", language.resources)
    );
    elements.guideContent.append(intro, columns, resourceGrid);
  }

  function createGuideSection(titleText) {
    const section = document.createElement("section");
    section.className = "guide-section";
    const title = document.createElement("h3");
    title.textContent = titleText;
    section.append(title);
    return section;
  }

  function createGuideLinkSection(title, links) {
    const section = createGuideSection(title);
    const list = document.createElement("ul");
    list.className = "guide-resource-list";
    links.forEach((resource) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = resource.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = resource.label;
      item.append(link);
      list.append(item);
    });
    section.append(list);
    return section;
  }

  function renderNoteSubjectOptions() {
    const currentValue = elements.noteSubject.value;
    elements.noteSubject.replaceChildren();
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Choose a subject";
    placeholder.disabled = true;
    elements.noteSubject.append(placeholder);

    const subjects = [...data.subjects];
    data.notes.forEach((note) => {
      if (!subjects.some((subject) => subject.toLocaleLowerCase() === note.subject.toLocaleLowerCase())) {
        subjects.push(note.subject);
      }
    });
    if (subjects.length === 0) subjects.push("General study");

    subjects.forEach((subject) => {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subject;
      elements.noteSubject.append(option);
    });
    elements.noteSubject.value = subjects.includes(currentValue) ? currentValue : "";
    if (!currentValue) placeholder.selected = true;
  }

  function renderNotes() {
    elements.notesList.replaceChildren();
    const query = elements.notesSearch.value.trim().toLocaleLowerCase();
    const notes = [...data.notes]
      .sort((left, right) => right.updatedAt.localeCompare(left.updatedAt))
      .filter((note) => !query || [note.title, note.subject, note.description]
        .some((value) => value.toLocaleLowerCase().includes(query)));
    elements.noteCount.textContent =
      `${data.notes.length} note${data.notes.length === 1 ? "" : "s"}`;

    if (notes.length === 0) {
      appendEmptyState(
        elements.notesList,
        query ? "No matching notes" : "No notes saved yet",
        query ? "Try another search term." : "Create a note to keep your study ideas in one place."
      );
      elements.notesList.lastElementChild.classList.add("notes-empty");
      return;
    }

    notes.forEach((note) => {
      const card = document.createElement("article");
      card.className = "note-card";
      const heading = document.createElement("div");
      heading.className = "note-card-heading";
      const title = document.createElement("h4");
      title.textContent = note.title;
      const subject = document.createElement("span");
      subject.className = "note-subject";
      subject.textContent = note.subject;
      heading.append(title, subject);

      const description = document.createElement("p");
      description.className = "note-description";
      description.textContent = note.description;
      const footer = document.createElement("div");
      footer.className = "note-card-heading";
      const updated = document.createElement("time");
      updated.className = "note-updated";
      updated.dateTime = note.updatedAt;
      const updatedDate = new Date(note.updatedAt);
      updated.textContent = Number.isNaN(updatedDate.getTime())
        ? "Saved note"
        : `Updated ${new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", year: "numeric" }).format(updatedDate)}`;
      const actions = document.createElement("div");
      actions.className = "row-actions";
      actions.append(createNoteAction("edit", note), createNoteAction("delete", note));
      footer.append(updated, actions);
      card.append(heading, description, footer);
      elements.notesList.append(card);
    });
  }

  function createNoteAction(action, note) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `row-action${action === "delete" ? " delete" : ""}`;
    button.dataset.noteAction = action;
    button.dataset.noteId = note.id;
    button.textContent = action === "edit" ? "Edit" : "Delete";
    button.setAttribute("aria-label", `${action === "edit" ? "Edit" : "Delete"} note: ${note.title}`);
    return button;
  }

  function getTopicProgress() {
    const topicMap = new Map();
    data.tasks.filter((task) => task.studyPlan === true).forEach((task) => {
      const subjectKey = task.subject.trim().toLocaleLowerCase();
      const topicKey = task.topic.trim().toLocaleLowerCase();
      const key = `${subjectKey}\u0000${topicKey}`;
      if (!topicMap.has(key)) {
        topicMap.set(key, {
          subject: task.subject,
          name: task.topic,
          sessions: []
        });
      }
      topicMap.get(key).sessions.push(task);
    });

    const topics = [...topicMap.values()].map((topic) => {
      const completedSessions = topic.sessions.filter((task) => task.completed).length;
      return {
        ...topic,
        completedSessions,
        isComplete: completedSessions === topic.sessions.length
      };
    }).sort((left, right) =>
      left.subject.localeCompare(right.subject) || left.name.localeCompare(right.name)
    );

    const subjectMap = new Map();
    topics.forEach((topic) => {
      if (!subjectMap.has(topic.subject)) {
        subjectMap.set(topic.subject, { name: topic.subject, total: 0, completed: 0 });
      }
      const subject = subjectMap.get(topic.subject);
      subject.total += 1;
      if (topic.isComplete) subject.completed += 1;
    });

    const subjects = [...subjectMap.values()]
      .map((subject) => ({
        ...subject,
        percent: subject.total ? Math.round((subject.completed / subject.total) * 100) : 0
      }))
      .sort((left, right) => left.name.localeCompare(right.name));
    const completed = topics.filter((topic) => topic.isComplete).length;

    return {
      topics,
      subjects,
      completed,
      pending: topics.length - completed,
      overallPercent: topics.length ? Math.round((completed / topics.length) * 100) : 0
    };
  }

  function createActionButton(action, id, label, type, description) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `row-action${action === "delete" ? " delete" : ""}`;
    button.dataset[`${type}Action`] = action;
    button.dataset[type === "planner" ? "taskId" : "entryId"] = id;
    button.textContent = label;
    button.setAttribute(
      "aria-label",
      `${label} ${type === "planner" ? "study task" : "timetable entry"}: ${description}`
    );
    return button;
  }

  function appendEmptyState(container, titleText, descriptionText) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    const title = document.createElement("strong");
    title.textContent = titleText;
    const description = document.createElement("span");
    description.textContent = descriptionText;
    empty.append(title, description);
    container.append(empty);
  }

  function addSubject(name) {
    const existing = data.subjects.find((subject) =>
      subject.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (existing) return existing;
    data.subjects.push(name);
    return name;
  }

  function displayTaskTitle(task) {
    return task.studyPlan === true ? task.topic : task.title;
  }

  function formatTime(value) {
    const date = new Date(`1970-01-01T${value}:00`);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(date);
  }

  function formatShortDate(value) {
    const date = new Date(`${value}T12:00:00`);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(date);
  }

  function defaultStudyTime(now) {
    const date = new Date(now);
    date.setMinutes(0, 0, 0);
    date.setHours(date.getHours() + 1);
    return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  }

  function setFormMessage(element, message, isError = false) {
    element.textContent = message;
    element.classList.toggle("is-error", isError);
  }

  function resetPlannerForm() {
    editingPlannerTaskId = null;
    elements.plannerForm.reset();
    elements.plannerDate.value = toDateKey(new Date());
    elements.plannerStartTime.value = defaultStudyTime(new Date());
    elements.plannerDuration.value = "45";
    elements.plannerFormTitle.textContent = "Plan a study task";
    elements.plannerSubmit.textContent = "Add study task";
    elements.plannerCancelEdit.hidden = true;
    setFormMessage(elements.plannerFormMessage, "");
  }

  function resetTimetableForm() {
    editingTimetableEntryId = null;
    elements.timetableForm.reset();
    elements.timetableDay.value = "0";
    elements.timetableDuration.value = "45";
    elements.timetableSubmit.textContent = "Add to timetable";
    elements.timetableCancelEdit.hidden = true;
    setFormMessage(elements.timetableFormMessage, "");
  }

  function resetNoteForm() {
    editingNoteId = null;
    elements.noteForm.reset();
    elements.noteFormTitle.textContent = "Create a note";
    elements.noteSubmit.textContent = "Save note";
    elements.noteCancelEdit.hidden = true;
    setFormMessage(elements.noteFormMessage, "");
  }

  function renderTasks() {
    elements.taskList.replaceChildren();
    elements.completedTaskList.replaceChildren();
    const pendingTasks = data.tasks
      .filter((task) => !task.completed)
      .sort((left, right) => left.dueDate.localeCompare(right.dueDate));
    const completedTasks = data.tasks
      .filter((task) => task.completed)
      .sort((left, right) => right.dueDate.localeCompare(left.dueDate));

    elements.taskSummary.textContent = pendingTasks.length
      ? `${pendingTasks.length} task${pendingTasks.length === 1 ? "" : "s"} to focus on`
      : "You're all caught up";
    elements.completedDetails.hidden = completedTasks.length === 0;
    elements.completedSummary.textContent = `Completed (${completedTasks.length})`;

    if (pendingTasks.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      const title = document.createElement("strong");
      title.textContent = data.tasks.length ? "All tasks complete!" : "Your task list is clear";
      const detail = document.createElement("span");
      detail.textContent = "Add a task whenever you're ready to plan your next study session.";
      empty.append(title, detail);
      elements.taskList.append(empty);
    } else {
      pendingTasks.forEach((task) => elements.taskList.append(createTaskRow(task, false)));
    }

    completedTasks.forEach((task) => elements.completedTaskList.append(createTaskRow(task, true)));
  }

  function createTaskRow(task, isComplete) {
    const row = document.createElement("div");
    row.className = `task-item${isComplete ? " is-complete" : ""}`;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "task-toggle";
    toggle.dataset.action = "toggle-task";
    toggle.dataset.taskId = task.id;
    toggle.setAttribute("aria-label", `${isComplete ? "Reopen" : "Mark"} ${displayTaskTitle(task)}${isComplete ? "" : " complete"}`);
    toggle.setAttribute("aria-pressed", String(isComplete));
    if (isComplete) {
      toggle.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
    }

    const copy = document.createElement("div");
    copy.className = "task-copy";
    const title = document.createElement("strong");
    title.textContent = displayTaskTitle(task);
    const subject = document.createElement("span");
    subject.textContent = task.studyPlan
      ? `${task.subject} · ${task.duration} min study`
      : task.subject;
    copy.append(title, subject);

    const meta = document.createElement("div");
    meta.className = "task-meta";
    const date = document.createElement("span");
    const dateLabel = formatDueDate(task.dueDate);
    date.className = `task-date${dateLabel === "Overdue" && !isComplete ? " is-overdue" : ""}`;
    date.textContent = dateLabel;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "task-delete";
    remove.dataset.action = "delete-task";
    remove.dataset.taskId = task.id;
    remove.setAttribute("aria-label", `Delete ${displayTaskTitle(task)}`);
    remove.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 7h15M9 7V4.5h6V7m-8.5 0 1 13h9l1-13M10 10.5v6M14 10.5v6"/></svg>';
    meta.append(date, remove);

    row.append(toggle, copy, meta);
    return row;
  }

  function renderSubjectOptions() {
    elements.taskSubject.replaceChildren();
    elements.subjectSuggestions.replaceChildren();
    const generalOption = document.createElement("option");
    generalOption.value = "";
    generalOption.textContent = "General study";
    elements.taskSubject.append(generalOption);

    data.subjects.forEach((subject) => {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subject;
      elements.taskSubject.append(option);

      const suggestion = document.createElement("option");
      suggestion.value = subject;
      elements.subjectSuggestions.append(suggestion);
    });
  }

  function renderSubjects() {
    elements.subjectList.replaceChildren();
    if (data.subjects.length === 0) {
      const empty = document.createElement("li");
      empty.className = "subject-empty";
      empty.textContent = "No subjects yet. Add one above to get started.";
      elements.subjectList.append(empty);
      return;
    }

    data.subjects.forEach((subject) => {
      const row = document.createElement("li");
      row.className = "subject-row";
      const name = document.createElement("span");
      name.textContent = subject;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.dataset.subject = subject;
      remove.textContent = "Remove";
      remove.setAttribute("aria-label", `Remove ${subject}`);
      row.append(name, remove);
      elements.subjectList.append(row);
    });
  }

  function formatDueDate(dateKey) {
    const currentDay = toDateKey(new Date());
    if (dateKey < currentDay) return "Overdue";
    if (dateKey === currentDay) return "Today";
    if (dateKey === addDays(currentDay, 1)) return "Tomorrow";
    const date = new Date(`${dateKey}T12:00:00`);
    if (Number.isNaN(date.getTime())) return dateKey;
    return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(date);
  }

  function toDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function addDays(dateKey, amount) {
    const date = new Date(`${dateKey}T12:00:00`);
    date.setDate(date.getDate() + amount);
    return toDateKey(date);
  }

  function createId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function announce(message) {
    elements.liveMessage.textContent = "";
    window.setTimeout(() => {
      elements.liveMessage.textContent = message;
    }, 20);
  }

  function closeSidebar() {
    elements.sidebar.classList.remove("is-open");
    elements.sidebarScrim.classList.remove("is-visible");
    elements.menuToggle.setAttribute("aria-expanded", "false");
    elements.menuToggle.setAttribute("aria-label", "Open navigation");
  }
})();