// Select elements
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#task_list");
const taskInput = document.querySelector("#taskInput");

// Add Task Function
function addTask() {
    const li = document.createElement("li");
    const inputValue = taskInput.value;

    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);

    // Input validation
    if (inputValue === "") {
        alert("Please enter a valid task");
    } else {
        taskList.appendChild(li);
    }

    console.log(inputValue);

    // Clear input
    taskInput.value = "";
}

// Event Listener
addTaskBtn.addEventListener("click", addTask);