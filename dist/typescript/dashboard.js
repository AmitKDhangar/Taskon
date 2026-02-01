"use strict";
// Tabs
const dashboardTab = document.body.querySelector(".dashboardtab");
const Mytasks = document.body.querySelector(".mytaskstab");
const notificationTab = document.body.querySelector(".notificationtab");
const settings = document.body.querySelector(".settingstab");
const logoutTab = document.body.querySelector(".logouttab");
// searchBar
const searchBar = document.body.querySelector(".search-bar");
const newtaskBtn = document.body.querySelector(".newtaskbtn");
const mails = document.body.querySelector(".ri-mail-send-line");
const profile = document.querySelector(".dynamic-profile");
const searchbarcontainer = document.body.querySelector(".search-bar-container");
// dynamic oulet
const dynamicoutlet = document.body.querySelector(".dynamic-outlet");
// dashboard
const dashboard = document.body.querySelector(".dashboard");
// dashboardOutlet
const Dashboardoutlet = document.body.querySelector(".dashboard-components");
// categories
const cateGories = document.body.querySelector(".mycategories");
// Trackings
const Trackings = document.body.querySelector(".mytracking");
// Search Bar Input
const SearhBarInput = document.body.querySelector(".search-bar-input");
// Search Icon
const searchIcon = document.body.querySelector(".ri-search-2-line");
// Tasks-container
const tasksContainer = document.body.querySelector(".tasks");
// TracksContainer
const TracksContainer = document.body.querySelector(".tracks");
// Signatures
let searchInput;
let searchQuery;
let addElement;
let removeElement;
// functions
addElement = (source, className) => {
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
let queryStore = "";
// functions
searchInput = (e) => {
    const target = e.target;
    queryStore = target.value;
};
SearhBarInput.addEventListener("input", searchInput);
searchIcon.addEventListener("click", () => {
    if (SearhBarInput.value.trim() === "") {
        searchIcon.style.color = "red";
    }
    else {
        localStorage.setItem("searchquery", queryStore);
    }
});
const tasks = [
    { id: 1, tasktitle: "Complete project report", taskduedate: "2012-12-20" },
    { id: 2, tasktitle: "Complete Research report", taskduedate: "2027-09-19" },
];
let tasksByuser = [];
window.addEventListener("load", () => {
    const newTasksByuser = localStorage.getItem("tasks");
    tasksByuser = JSON.parse(newTasksByuser);
    tasksByuser.push(tasks[0]);
    tasksByuser.forEach((tasks) => {
        const task = document.createElement("div");
        task.classList.add("task");
        task.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/2159px-Google_Tasks_2021.svg.png"><img>
                <p>${tasks.tasktitle.slice(0, 45) + '..'}</p>
                <p>${tasks.taskduedate}</p>`;
        tasksContainer === null || tasksContainer === void 0 ? void 0 : tasksContainer.appendChild(task);
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
    TracksContainer === null || TracksContainer === void 0 ? void 0 : TracksContainer.appendChild(track);
});
// Dynamic Photo Changes
document.addEventListener("DOMContentLoaded", () => {
    const profiledata = localStorage.getItem("ProfileCredentials");
    const currprofileimage = JSON.parse(profiledata);
    if (currprofileimage) {
        profile.src = currprofileimage.image;
    }
    else {
        profile.src =
            "https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14213.jpg";
    }
});
// storage Event
window.addEventListener("storage", () => {
    location.reload();
});
