console.log('To-Do-List')

document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");
    const newTaskInput = document.getElementById("newTask");
    const addTaskBtn = document.getElementById("addTaskBtn");
    let taskListContainer = document.getElementById("taskList");
    

    addTaskButton.addEventListener("click", function() {
        toggleTaskInput();
    });

    addTaskBtn.addEventListener("click", function() {
        addTask();
    });

    function toggleTaskInput() {
        taskInput.style.display = (taskInput.style.display === "none" || taskInput.style.display === "") ? "block" : "none";

        // Create a new list only on the first click
        if (isFirstAdd) {
            taskListContainer = document.createElement("div");
            taskListContainer.id = "taskListContainer";
            document.body.appendChild(taskListContainer);
            isFirstAdd = false;
        }
    }

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskList.appendChild(TaskItem);

            
});
