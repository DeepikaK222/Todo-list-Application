function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
  
    if (taskValue === '') {
      alert('Please enter a task!');
      return;
    }
  
    const tasksList = document.getElementById('tasks');
  
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      ${taskValue}
      <button onclick="markComplete(this)">Complete</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;
  
    tasksList.appendChild(newTask);
  
    taskInput.value = ''; 
  }
  
  function markComplete(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
  }
  
  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  
  document.querySelectorAll('.habit-section input').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const habitName = checkbox.id;
      localStorage.setItem(habitName, checkbox.checked);
    });
  });
  
  window.onload = function() {
    document.querySelectorAll('.habit-section input').forEach((checkbox) => {
      const habitName = checkbox.id;
      checkbox.checked = localStorage.getItem(habitName) === 'true';
    });
  };
  
  