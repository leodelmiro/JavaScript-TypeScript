const addBtn = document.querySelector("#btn-add-task")
const tasksElement = document.querySelector("#tasks")
const inputNewTask = document.querySelector("#input-new-task")


function createNewTask(taskText) {
    const taskElement = createLi()
    const deleteTaskBtn = createDeleteButton()
    tasksElement.appendChild(taskElement)
    taskElement.appendChild(deleteTaskBtn)
    deleteTaskBtn.addEventListener('click', function () {
    });
    cleanInput()
    saveTask()

    function createDeleteButton() {
        const deleteTaskBtn = document.createElement('button')
        deleteTaskBtn.innerHTML = 'Apagar'
        deleteTaskBtn.style.marginLeft = '5px'
        deleteTaskBtn.setAttribute('class', 'apagar')
        deleteTaskBtn.setAttribute('title', 'Apagar esta tarefa')
        return deleteTaskBtn
    }

    function createLi() {
        const taskElement = document.createElement('li')
        taskElement.innerText = taskText
        return taskElement
    }
}

function saveTask() {
    const liTasks = tasksElement.querySelectorAll('li')
    const tasks = []

    liTasks.forEach(task => {
        const taskText = task.innerText.replace('Apagar', '')
        tasks.push(taskText)
    })

    const tasksJson = JSON.stringify(tasks)
    localStorage.setItem('tasks', tasksJson)
}

document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        saveTask()
    }
})

inputNewTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) { // Enter pressionado
        if (!inputNewTask.value) return
        createNewTask(inputNewTask.value)
    }
})

addBtn.addEventListener('click', function () {
    if (!inputNewTask.value) return
    createNewTask(inputNewTask.value)
});

function cleanInput() {
    inputNewTask.value = ''
    inputNewTask.focus()
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks')
    const taskList = JSON.parse(tasks)

    taskList.forEach(task => {
        createNewTask(task)
    })
}

addSavedTasks()
