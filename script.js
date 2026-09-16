function addTask() {

    let task = document.getElementById("taskInput").value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = task;

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    let deleteButton = document.createElement("button");

    deleteButton.innerHTML = " Delete";

    deleteButton.onclick = function(event) {
        event.stopPropagation();
        li.remove();
    };

    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}

function updateTaskCount() {

    let tasks = document.querySelectorAll("#taskList li");

    document.getElementById("taskCount").innerHTML =
        "Tasks: " + tasks.length;
}