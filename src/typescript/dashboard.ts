// Tabs
const dashboardTab = document.body.querySelector(
  ".dashboardtab"
) as HTMLElement;

const Mytasks = document.body.querySelector(".mytaskstab") as HTMLElement;

const notificationTab = document.body.querySelector(
  ".notificationtab"
) as HTMLElement;
const settings = document.body.querySelector(".settingstab") as HTMLElement;
const logoutTab = document.body.querySelector(".logouttab") as HTMLElement;
// searchBar
const searchBar = document.body.querySelector(".search-bar") as HTMLElement;
const newtaskBtn = document.body.querySelector(
  ".newtaskbtn"
) as HTMLButtonElement;
const mails = document.body.querySelector(".ri-mail-send-line") as HTMLElement;
const profile = document.querySelector(".dynamic-profile") as HTMLImageElement;
const searchbarcontainer = document.body.querySelector(
  ".search-bar-container"
) as HTMLElement;
// dynamic oulet
const dynamicoutlet = document.body.querySelector(
  ".dynamic-outlet"
) as HTMLElement;
// dashboard
const dashboard = document.body.querySelector(".dashboard") as HTMLElement;
// dashboardOutlet
const Dashboardoutlet = document.body.querySelector(
  ".dashboard-components"
) as HTMLElement;
// categories
const cateGories = document.body.querySelector(".mycategories") as HTMLElement;
// Trackings
const Trackings = document.body.querySelector(".mytracking") as HTMLElement;
// Search Bar Input
const SearhBarInput = document.body.querySelector(
  ".search-bar-input"
) as HTMLInputElement;
// Search Icon
const searchIcon = document.body.querySelector(
  ".ri-search-2-line"
) as HTMLElement;
// Tasks-container
const tasksContainer = document.body.querySelector(".tasks");

// TracksContainer
const TracksContainer = document.body.querySelector(".tracks");

// Signatures
let searchInput: (e: Event) => void;
let searchQuery: () => void;
let addElement: (source: string, className: string) => void;
let removeElement: () => void;

// functions

addElement = (source: string, className: string) => {
  dynamicoutlet.style.display = "inline-block";
  dynamicoutlet.classList.remove("dynamic-outlet");
  dynamicoutlet.classList.add(className);
  dynamicoutlet.src = source;
};

removeElement = () => {
  dynamicoutlet.style.display = "none";
};
// EventListeners

// SearhBar
searchBar.addEventListener("click", () => {
  addElement("searchpopup.html", "search-bar-outlet");
});
searchBar.addEventListener("blur", () => {
  removeElement();
});

// NewTaskButton
newtaskBtn.addEventListener("click", () => {
  addElement("newtaskform.html", "newtask-outlet");
});
newtaskBtn.addEventListener("auxclick", () => {
  removeElement();
});

// Mails
mails.addEventListener("click", () => {
  addElement("mails.html", "mails-outlet");
});
mails.addEventListener("focusout", () => {
  removeElement();
});

// profile
profile.addEventListener("click", () => {
  addElement("profile.html", "profile-outlet");
});
profile.addEventListener("focusout", () => {
  removeElement();
});

let queryStore: string = "";
// functions

searchInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  queryStore = target.value;
};
SearhBarInput.addEventListener("input", searchInput);
searchIcon.addEventListener("click", () => {
  if (SearhBarInput.value.trim() === "") {
    searchIcon.style.color = "red";
  } else {
    localStorage.setItem("searchquery", queryStore);
  }
});

const tasks = [
  { id: 1, tasktitle: "Complete project report", taskduedate: "2012-12-20" },
  { id: 2, tasktitle: "Complete Research report", taskduedate: "2027-09-19" },
];

let tasksByuser: object[] = [];
window.addEventListener("load", () => {
  const newTasksByuser = localStorage.getItem("tasks");
  tasksByuser = JSON.parse(newTasksByuser);
  tasksByuser.push(tasks[0]);
  tasksByuser.forEach((tasks) => {
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/2159px-Google_Tasks_2021.svg.png"><img>
                <p>${tasks.tasktitle.slice(0,45) + '..'}</p>
                <p>${tasks.taskduedate}</p>`;
    tasksContainer?.appendChild(task);
  });
});

const tracks = [
  {
    id: 1,
    task: "Complete project report",
    date: "2025-08-18",
    status: "pending",
  },
  { id: 2, task: "Team meeting", date: "2025-08-19", status: "completed" },
  { id: 3, task: "Code review", date: "2025-08-20", status: "in-progress" },
  { id: 4, task: "Client presentation", date: "2025-08-21", status: "pending" },
  { id: 5, task: "Submit assignment", date: "2025-08-22", status: "pending" },
];

tracks.forEach((tracks) => {
  const track = document.createElement("div");
  track.classList.add("track");
  track.innerHTML = `<p class="task-id">${tracks.id}</p>
                <p>${tracks.task}</p>
                <p>${tracks.date}</p>
                <p>${tracks.status}</p>`;
  TracksContainer?.appendChild(track);
});

// Dynamic Photo Changes
document.addEventListener("DOMContentLoaded", () => {
  const profiledata = localStorage.getItem("ProfileCredentials");
  const currprofileimage = JSON.parse(profiledata);
  if (currprofileimage) {
    profile.src = currprofileimage.image;
  } else {
    profile.src =
      "https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14213.jpg";
  }
});

// storage Event

window.addEventListener("storage", () => {
   location.reload();
});
