console.log('To-Do-List')
const body = document.body



body.style.backgroundColor = 'lavender'
body.style.color = 'bright white'



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













