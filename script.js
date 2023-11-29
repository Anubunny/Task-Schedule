
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


function renderTasks() {
  const tasksContainer = document.getElementById('tasks');
  tasksContainer.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'taskItem';
    taskItem.innerHTML = `
      <span>${task}</span>
      <button onclick="removeTask(${index})">Remove</button>
    `;
    tasksContainer.appendChild(taskItem);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();

  if (taskValue !== '') {
    tasks.push(taskValue);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    taskInput.value = '';
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
