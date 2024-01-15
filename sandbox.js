let isFirstAdd = true;

function addEntry() {
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();

    if (title !== "" && description !== "") {
        const entryList = document.getElementById("entryList");
        const entryItem = document.createElement("li");

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            toggleCompleted(entryItem, checkbox);
        });

        // Create "Completed" button
        const completedButton = document.createElement("button");
        completedButton.textContent = "Completed";
        completedButton.addEventListener("click", function() {
            markAsCompleted(entryItem);
        });

        // Create "Remove" button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            removeEntry(entryItem);
        });

        entryItem.appendChild(checkbox);
        entryItem.appendChild(document.createTextNode(`Title: ${title}, Description: ${description}`));
        entryItem.appendChild(completedButton);
        entryItem.appendChild(removeButton);
        
        entryList.appendChild(entryItem);

        // Clear input fields after adding entry
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    } else {
        alert("Both title and description are required.");
    }
}

function toggleCompleted(entryItem, checkbox) {
    if (checkbox.checked) {
        entryItem.classList.add("completed");
    } else {
        entryItem.classList.remove("completed");
    }
}

function markAsCompleted(entryItem) {
    entryItem.classList.add("completed");
}

function removeEntry(entryItem) {
    entryItem.remove();
}










// task button, work on functionality, play around with it 


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

    taskList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            toggleTaskDone(event.target);
        }
    });

    function toggleTaskInput() {
        taskInput.style.display = (taskInput.style.display === "none" || taskInput.style.display === "") ? "block" : "none";

        
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

            newTaskInput.value = "";

        }
    }

    function toggleTaskDone(taskItem) {
        taskItem.classList.toggle("done");
    }


});

