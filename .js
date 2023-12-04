document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = "";

            // Add event listener to the delete button
            const deleteButton = listItem.querySelector(".delete-button");
            deleteButton.addEventListener("click", function() {
                listItem.remove();
            });

            // Toggle task completion
            listItem.addEventListener("click", function() {
                listItem.classList.toggle("completed");
            });
        }
    });
});