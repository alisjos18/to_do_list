const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  // Create task elements
  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  const flair = ['✨', '🌸', '💫', '🌟', '🌙'];
  const emoji = flair[Math.floor(Math.random() * flair.length)];
  span.textContent = `${emoji} ${taskText}`;


  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✅ complete';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌ delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
}