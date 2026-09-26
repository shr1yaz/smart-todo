textInput = document.querySelector('input[type="text"]');
textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const taskContainer = document.querySelector('.tasks-container');
        taskContainer.innerHTML += `<div class="task"><input type="checkbox"></input><p>${e.target.value}</p><img src="close.png"/></div>`
    }
})

const taskContainer = document.querySelector('.tasks-container');

taskContainer.addEventListener('click', (event) => {
    if (event.target.matches('.task img')) {
        event.target.closest('.task').remove();
    }
});
