// Element Quering
const taskTitle = document.body.querySelector(".tasktitle");
const taskDuedate = document.body.querySelector("#duedate");
const taskStage = document.body.querySelector("#stage");
const taskpriorty = document.body.querySelector("#priority");
const taskTeam = document.body.querySelector("#team");
const taskAssignee = document.body.querySelector(".taskassignee");
const taskDescription = document.body.querySelector(".taskdescription");
const createTaskbtn = document.body.querySelector("button");
const cancelAddtask = document.body.querySelector(".ri-close-line");
const Taskform = document.body.querySelector("form");
export const addTaskComponent = document.body.querySelector(".newtask-container");
const taskAddedContainer = document.body.querySelector(".taskadded");
// Object
let taskForm = {
    id: 0,
    tasktitle: "",
    taskduedate: "",
    taskstage: "",
    taskteam: "",
    taskpriority: "",
    taskassignee: "",
    taskdes: "",
};
// signatures
let handleTaskchange;
let handleTasksubmit;
let handleTaskValidation;
// Functions
handleTaskValidation = (validData) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    if (((_a = validData === null || validData === void 0 ? void 0 : validData.tasktitle) === null || _a === void 0 ? void 0 : _a.trim()) === "") {
        taskTitle.style.border = "2px solid red";
    }
    if ((_b = validData === null || validData === void 0 ? void 0 : validData.tasktitle) === null || _b === void 0 ? void 0 : _b.trim()) {
        taskTitle.style.border = "2px solid green";
    }
    if (((_c = validData === null || validData === void 0 ? void 0 : validData.taskduedate) === null || _c === void 0 ? void 0 : _c.trim()) === "") {
        taskDuedate.style.border = "2px solid red";
    }
    if ((_d = validData === null || validData === void 0 ? void 0 : validData.taskduedate) === null || _d === void 0 ? void 0 : _d.trim()) {
        taskDuedate.style.border = "2px solid green";
    }
    if (((_e = validData === null || validData === void 0 ? void 0 : validData.taskstage) === null || _e === void 0 ? void 0 : _e.trim()) === "") {
        taskStage.style.border = "2px solid red";
    }
    if ((_f = validData === null || validData === void 0 ? void 0 : validData.taskstage) === null || _f === void 0 ? void 0 : _f.trim()) {
        taskStage.style.border = "2px solid green";
    }
    if (((_g = validData === null || validData === void 0 ? void 0 : validData.taskpriority) === null || _g === void 0 ? void 0 : _g.trim()) === "") {
        taskpriorty.style.border = "2px solid red";
    }
    if ((_h = validData === null || validData === void 0 ? void 0 : validData.taskpriority) === null || _h === void 0 ? void 0 : _h.trim()) {
        taskpriorty.style.border = "2px solid green";
    }
    if (((_j = validData === null || validData === void 0 ? void 0 : validData.taskteam) === null || _j === void 0 ? void 0 : _j.trim()) === "") {
        taskTeam.style.border = "2px solid red";
    }
    if ((_k = validData === null || validData === void 0 ? void 0 : validData.taskteam) === null || _k === void 0 ? void 0 : _k.trim()) {
        taskTeam.style.border = "2px solid green";
    }
    if (((_l = validData === null || validData === void 0 ? void 0 : validData.taskassignee) === null || _l === void 0 ? void 0 : _l.trim()) === "") {
        taskAssignee.style.border = "2px solid red";
    }
    if ((_m = validData === null || validData === void 0 ? void 0 : validData.taskassignee) === null || _m === void 0 ? void 0 : _m.trim()) {
        taskAssignee.style.border = "2px solid green";
    }
    if (((_o = validData === null || validData === void 0 ? void 0 : validData.taskdes) === null || _o === void 0 ? void 0 : _o.trim()) === "") {
        taskDescription.style.border = "2px solid red";
    }
    if ((_p = validData === null || validData === void 0 ? void 0 : validData.taskdes) === null || _p === void 0 ? void 0 : _p.trim()) {
        taskDescription.style.border = "2px solid green";
    }
    if (validData.tasktitle &&
        validData.taskduedate &&
        validData.taskstage &&
        validData.taskpriority &&
        validData.taskteam &&
        validData.taskassignee &&
        validData.taskdes) {
        return 1;
    }
};
//Global Task Store
let taskStore = [];
handleTaskchange = (e) => {
    const { name, value } = e.target;
    taskForm = Object.assign(Object.assign({}, taskForm), { [name]: value });
};
handleTasksubmit = (data) => {
    let idCount = 2;
    idCount = JSON.parse(localStorage.getItem("tasknumber")) || 2;
    idCount++;
    localStorage.setItem("tasknumber", idCount);
    data = Object.assign(Object.assign({}, data), { id: idCount });
    // adding task to local storage
    taskStore = JSON.parse(localStorage.getItem("tasks")) || [];
    taskStore.push(data);
    localStorage.setItem("tasks", JSON.stringify(taskStore));
    // showing added task message
    let taskAdded = document.createElement("p");
    taskAdded.classList.add("taskadd");
    taskAdded.innerHTML = ` <img src = "https://assets-v2.lottiefiles.com/a/dd13b484-1161-11ee-9d4c-cb11cd77cdea/3Rmn92bRun.png"></img> Task is added Successfully - ${data.tasktitle} `;
    taskAddedContainer.appendChild(taskAdded);
    setTimeout(() => {
        taskAddedContainer.removeChild(taskAdded);
    }, 4000);
    //  reseting fields
    taskTitle.value = "";
    taskDuedate.value = "";
    taskStage.selectedIndex = 0;
    taskpriorty.selectedIndex = 0;
    taskAssignee.value = "";
    taskTeam.selectedIndex = 0;
    taskDescription.value = "";
    // reseting styling on submit
    taskTitle.style.border = "2px solid violet";
    taskpriorty.style.border = "2px solid violet";
    taskAssignee.style.border = "2px solid violet";
    taskTeam.style.border = "2px solid violet";
    taskDescription.style.border = "2px solid violet";
};
//Event Listeners
taskTitle.addEventListener("change", handleTaskchange);
taskDuedate.addEventListener("change", () => {
    taskForm.taskduedate = taskDuedate === null || taskDuedate === void 0 ? void 0 : taskDuedate.value;
});
taskStage.addEventListener("change", () => {
    taskForm.taskstage = taskStage === null || taskStage === void 0 ? void 0 : taskStage.value;
});
taskpriorty.addEventListener("change", () => {
    taskForm.taskpriority = taskpriorty === null || taskpriorty === void 0 ? void 0 : taskpriorty.value;
});
taskTeam.addEventListener("change", () => {
    taskForm.taskteam = taskTeam === null || taskTeam === void 0 ? void 0 : taskTeam.value;
});
taskAssignee.addEventListener("change", handleTaskchange);
taskDescription.addEventListener("change", handleTaskchange);
createTaskbtn.addEventListener("click", Taskform.submit);
Taskform.addEventListener("submit", (e) => {
    e.preventDefault();
    const valid = handleTaskValidation(taskForm);
    if (valid) {
        handleTasksubmit(taskForm);
    }
});
