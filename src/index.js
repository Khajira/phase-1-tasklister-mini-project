document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value;
  
      const taskList = document.getElementById("tasks");
      const newTask = document.createElement("li");
      newTask.textContent = taskText;
  
      taskList.appendChild(newTask);
  
      // Clear input field after task is added
      taskInput.value = "";
  
      // Optional: Scroll to the bottom of the task list
      taskList.scrollTop = taskList.scrollHeight;
    });
  });
});
