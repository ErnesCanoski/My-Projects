function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    
    if (task.trim() !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML = task + '<span onclick="removeTask(this)">❌</span>';
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function removeTask(taskElement) {
    taskElement.parentElement.remove();
}
