// Element Quering
const taskTitle = document.body.querySelector(".tasktitle") as HTMLElement;
const taskDuedate = document.body.querySelector("#duedate") as HTMLElement;
const taskStage = document.body.querySelector("#stage") as HTMLElement;
const taskpriorty = document.body.querySelector("#priority") as HTMLElement;
const taskTeam = document.body.querySelector("#team") as HTMLElement;
const taskAssignee = document.body.querySelector(
  ".taskassignee"
) as HTMLElement;
const taskDescription = document.body.querySelector(
  ".taskdescription"
) as HTMLElement;
const createTaskbtn = document.body.querySelector(
  "button"
) as HTMLButtonElement;
const cancelAddtask = document.body.querySelector(
  ".ri-close-line"
) as HTMLElement;
const Taskform = document.body.querySelector("form") as HTMLFormElement;
export const addTaskComponent = document.body.querySelector(
  ".newtask-container"
) as HTMLElement;
const taskAddedContainer = document.body.querySelector(
  ".taskadded"
) as HTMLElement;

// Interfaces
interface Itaskform {
  id:number;
  tasktitle: string;
  taskduedate: string;
  taskstage: string;
  taskteam: string;
  taskpriority: string;
  taskassignee: string;
  taskdes: string;
}
// Object
let taskForm: Itaskform = {
  id:0,
  tasktitle: "",
  taskduedate: "",
  taskstage: "",
  taskteam: "",
  taskpriority: "",
  taskassignee: "",
  taskdes: "",
};

// signatures
let handleTaskchange: (e: Event) => void;
let handleTasksubmit: (data: Itaskform) => void;
let handleTaskValidation: (validData: Itaskform) => number;

// Functions
handleTaskValidation = (validData: Itaskform): number => {
  if (validData?.tasktitle?.trim() === "") {
    taskTitle.style.border = "2px solid red";
  }
  if (validData?.tasktitle?.trim()) {
    taskTitle.style.border = "2px solid green";
  }
  if (validData?.taskduedate?.trim() === "") {
    taskDuedate.style.border = "2px solid red";
  }
  if (validData?.taskduedate?.trim()) {
    taskDuedate.style.border = "2px solid green";
  }
  if (validData?.taskstage?.trim() === "") {
    taskStage.style.border = "2px solid red";
  }
  if (validData?.taskstage?.trim()) {
    taskStage.style.border = "2px solid green";
  }
  if (validData?.taskpriority?.trim() === "") {
    taskpriorty.style.border = "2px solid red";
  }
  if (validData?.taskpriority?.trim()) {
    taskpriorty.style.border = "2px solid green";
  }
  if (validData?.taskteam?.trim() === "") {
    taskTeam.style.border = "2px solid red";
  }
  if (validData?.taskteam?.trim()) {
    taskTeam.style.border = "2px solid green";
  }
  if (validData?.taskassignee?.trim() === "") {
    taskAssignee.style.border = "2px solid red";
  }
  if (validData?.taskassignee?.trim()) {
    taskAssignee.style.border = "2px solid green";
  }
  if (validData?.taskdes?.trim() === "") {
    taskDescription.style.border = "2px solid red";
  }
  if (validData?.taskdes?.trim()) {
    taskDescription.style.border = "2px solid green";
  }
  if (
    validData.tasktitle &&
    validData.taskduedate &&
    validData.taskstage &&
    validData.taskpriority &&
    validData.taskteam &&
    validData.taskassignee &&
    validData.taskdes
  ) {
    return 1;
  }
};

//Global Task Store
let taskStore: object[] = [];
handleTaskchange = (e: Event) => {
  const { name, value } = e.target as EventTarget;
  taskForm = { ...taskForm, [name]: value };
};

handleTasksubmit = (data: Itaskform) => {
  let idCount = 2;
  idCount = JSON.parse(localStorage.getItem("tasknumber")) || 2 ;
  idCount++;
  localStorage.setItem("tasknumber",idCount);
  data = {...data,id:idCount}
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
  taskForm.taskduedate = taskDuedate?.value;
});
taskStage.addEventListener("change", () => {
  taskForm.taskstage = taskStage?.value;
});
taskpriorty.addEventListener("change", () => {
  taskForm.taskpriority = taskpriorty?.value;
});
taskTeam.addEventListener("change", () => {
  taskForm.taskteam = taskTeam?.value;
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
