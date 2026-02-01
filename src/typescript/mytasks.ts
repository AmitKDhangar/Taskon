// Element Querying
const taskContainer = document.body.querySelector("tbody") as HTMLElement | null;

// Interfaces
interface Idata {
  id: number;
  tasktitle: string;
  taskduedate: string;
  taskstage: string;
  taskpriority: string;
  taskteam: string;
  taskassignee: string;
}

// Some raw data
let rawData: Array<Idata> = [
  {
    id: 0,
    tasktitle: "Marketing Strategy Plan",
    taskassignee: "Priya Sharma",
    taskduedate: "next week",
    taskstage: "todo",
    taskpriority: "low",
    taskteam: "marketing",
  },
  {
    id: 2,
    tasktitle: "QA Testing for Release",
    taskassignee: "Vikram Singh",
    taskduedate: "next hours",
    taskstage: "review",
    taskpriority: "high",
    taskteam: "qa",
  },
];

// HandleDelete function
let handleDelete: (idx: number, data: Idata) => void = (idx, data) => {
  console.log("Deleted Task ID:", idx, data);
  // Remove task from local storage
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]") as Idata[];
  const filteredTasks = storedTasks.filter((t) => t.id !== idx);
  localStorage.setItem("tasks", JSON.stringify(filteredTasks));

  // Remove from DOM
  const row = document.querySelector(`tr[data-id='${idx}']`);
  row?.remove();
};

window.addEventListener("DOMContentLoaded", () => {
  // Get tasks from localStorage
  const taskData = localStorage.getItem("tasks");
  let taskDataArray: Idata[] = taskData ? JSON.parse(taskData) : [];

  // Add rawData[0] only if it doesn't exist
  if (!taskDataArray.find((t) => t.id === rawData[0].id)) {
    taskDataArray.push(rawData[0]);
  }

  // Save updated tasks back to localStorage
  localStorage.setItem("tasks", JSON.stringify(taskDataArray));

  // Loop through tasks and render
  taskDataArray.forEach((task) => {
    if (!taskContainer) return;

    const taskRow = document.createElement("tr");
    taskRow.classList.add("task");
    taskRow.dataset.id = task.id.toString(); // for easy DOM removal later
    taskRow.innerHTML = `
      <td>${task.tasktitle}</td>
      <td>${task.taskduedate}</td>
      <td>${task.taskstage}</td>
      <td>${task.taskpriority}</td>
      <td>${task.taskteam}</td>
      <td>${task.taskassignee}</td>
      <td><img class="remove-task" src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" data-id="${task.id}" style="cursor:pointer;"></td>
    `;
    taskContainer.appendChild(taskRow);
  });

  // Add click listeners for remove buttons
  const removeButtons = document.querySelectorAll(".remove-task") as NodeListOf<HTMLImageElement>;
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const id = parseInt((event.target as HTMLElement).getAttribute("data-id") || "0");
      const task = taskDataArray.find((t) => t.id === id);
      if (task) handleDelete(id, task);
    });
  });
});
