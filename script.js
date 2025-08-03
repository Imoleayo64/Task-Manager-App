document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <button onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(li);

  saveTask(task);
  taskInput.value = "";
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
  removeTask(li.firstChild.textContent.trim());
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

function removeTask(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
    }
