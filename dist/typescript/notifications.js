"use strict";
// Element Quering
const notificationContainer = document.body.querySelector("ul");
// global object
let notificationHolder = {
    id: 0,
    tasktitle: "",
    taskdes: "",
    taskassignee: "",
    taskduedate: "",
    taskpriority: "",
    tasklink: "",
};
const demoData = [
    {
        id: 0,
        taskassignee: "Amit Dhangar",
        tasktitle: "Frontend Development Project",
        taskdes: "done",
        taskduedate: "2025-08-24",
        taskpriority: "Moderate",
        taskstage: "Done",
        taskteam: "Management",
    },
    {
        id: 1,
        taskassignee: "Neha Sharma",
        tasktitle: "Backend API Integration",
        taskdes: "pending review",
        taskduedate: "2025-08-28",
        taskpriority: "High",
        taskstage: "In Progress",
        taskteam: "Development",
    },
    {
        id: 2,
        taskassignee: "Rohan Verma",
        tasktitle: "UI/UX Design Update",
        taskdes: "wireframes submitted",
        taskduedate: "2025-08-30",
        taskpriority: "Low",
        taskstage: "Review",
        taskteam: "Design",
    },
];
let notificationStore = [];
// signatures
let notificationDetail;
// data on DOMload
const data = localStorage.getItem("tasks");
notificationStore = data ? JSON.parse(data) : [];
// Only push demo data if localStorage is empty
if (notificationStore.length === 0) {
    notificationStore.push(demoData[0], demoData[1], demoData[2]);
    localStorage.setItem("tasks", JSON.stringify(notificationStore));
}
// All the Notifications
notificationStore.forEach((notify, idx) => {
    const notification = document.createElement("li");
    notification.innerHTML = `<div class = "notification">
                     <img src="https://cdn-icons-png.freepik.com/256/6319/6319720.png?semt=ais_white_label">
                   <div class="titleanddescription">
                  <p class="notification-title">${notify.tasktitle}</p>
                  <p class="notification-description">${notify.taskdes}</p>
                  </div>
                  </div>`;
    notification.dataset.index = idx.toString();
    notificationContainer.appendChild(notification);
    const notificationlist = document.body.querySelectorAll("li");
    notificationlist.forEach((notific) => {
        notific.addEventListener("click", () => {
            const idx = parseInt(notific.dataset.index);
            const data = notificationStore[idx];
            notificationHolder = data;
            notificationDetail(notificationHolder);
        });
    });
});
notificationDetail = (notificDetail) => {
    const notificContainer = document.body.querySelector(".detail-notification");
    notificContainer.innerHTML = `<li>
                <div class="assignee detail">
                <i class="ri-user-5-line"><p>Assignee</p></i>
                <p><i class="ri-user-smile-line"></i>${notificDetail.taskassignee}</p>
              </div>
            </li>
            <li>
              <div class="deadline detail">
                <i class="ri-time-line"><p>Due Date</p></i>
                <p>${notificDetail.taskduedate}</p>
              </div>
            </li>
            <li>
              <div class="project detail">
                <i class="ri-list-check-3"><p>Project</p></i>
                <p>${notificDetail.tasktitle}</p>
              </div>
            </li>
            <li>
              <div class="priority detail">
                <i class="ri-list-check-2"><p>Priority</p></i>
                <p>${notificDetail.taskpriority}</p>
              </div>
              <li>`;
};
//Link adding Functionality
let linkStore = {};
// add btn
const addBtn = document.body.querySelector(".ri-add-line");
// savechangesbtn
const updateBtn = document.body.querySelector(".Updatebtn");
// linkfield
const linkField = document.body.querySelector("input");
// linkcontainer
const linkContainer = document.body.querySelector(".links");
// Event Listener
linkField.addEventListener("change", () => {
    linkStore = linkField.value;
});
addBtn.addEventListener("click", () => {
    const notificContainer = document.body.querySelector(".detail-notification");
    let link = document.createElement("li");
    link.innerHTML = `
    <div class="link-detail detail">
                <i class="ri-link"><p>link</p></i>
                <p>${linkStore.slice(0, 10) + `..`}</p>
              </div>`;
    notificContainer.appendChild(link);
});
updateBtn.addEventListener("click", () => {
    linkField.value = "";
});
