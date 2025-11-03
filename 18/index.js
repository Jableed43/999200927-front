// Tarea 1. Referenciemos elementos html
const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")
const taskHelp = document.getElementById("task-help")

// Tarea 2. Crear boton de eliminar dentro de la tarea
// Elimina la tarea
function createDeleteButton() {
    // Creamos el boton
    const deleteBtn = document.createElement("button")
    // Le añadimos texto al button
    deleteBtn.textContent = "Eliminar"
    // Le añadimos una clase
    deleteBtn.classList.add("delete-btn")
    // .className sobreescribe todas las clases
    // deleteBtn.className = "delete-btn"

    // Añadimos evento con click, al hacer click sobre el boton
    // eliminamos el elemento padre, el cual es un li
    deleteBtn.addEventListener("click", function() {
        this.parentNode.remove()
    })
    return deleteBtn
}

// Creamos span de tarea, va a contener el texto del input
// parametro -> de la funcion
// argumento -> es el valor del parametro
// text -> parametro // "papaya" -> argumento
function createTaskSpan(text) {
    // Creamos el span
    const taskSpan = document.createElement("span")
    // Le asignamos a su contenido el texto del argumento
    taskSpan.textContent = text
    // le añadimos una clase task-text
    taskSpan.classList.add("task-text")

    // Evento para completar la tarea
    taskSpan.addEventListener("click", function() {
        // this -> se refiere al elemento sobre el cual estamos trabajando
        // toggle - alterna entre agregar y quitar la clase completed
        this.parentNode.classList.toggle("completed")
    })
    return taskSpan
}
// Validamos input
function validateInput() {
    // Validaciones -> tipo, contenido (no esté vacio)
    const taskText = taskInput.value.trim()

    // Validamos que no esté vacio, que no este undefined
    if(!taskText){
        taskInput.style.borderColor = "red"
        taskInput.placeholder = "¡Escribe una tarea!"
        taskHelp.textContent = "Debes escribir una tarea antes de confirmar"
        // Devolver una respuesta negativa
        return false
    }
    // Si el input posee texto, limpiamos los estilos anteriores
    taskInput.style.borderColor = ""
    taskInput.placeholder = "Escribe una nueva tarea"
    taskHelp.textContent = 'Presiona enter o haz click en "Agregar Tarea"'
    return true
}

// Funcion de agregar tarea
// Validar usando validateInput
// crear el li
// le agregamos al li el span con la tarea y el boton de eliminar
function agregarTarea() {
    // Si usamos condicional negativo atajamos el error de forma temprana
    // Early return
    if(!validateInput()){
        // return finaliza la ejecucion
        // sale de la funcion
        return
    }

    const taskText = taskInput.value.trim()

    // Creamos los li, elementos que contienen las tareas y el boton
    const listItem = document.createElement("li")
    // Le asignamos una clase a nuestro list item
    listItem.classList.add("task-item")

    // Creamos los hijos para el li
    const taskSpan = createTaskSpan(taskText)
    const deleteBtn = createDeleteButton()

    // appendChild añade un elemento al final de un elemento padre
    // append = añadir
    // Ensamblamos nuestro li + span + button de eliminar
    listItem.appendChild(taskSpan)
    listItem.appendChild(deleteBtn)
    // Le pasamos a la ul los list item con el span y el button
    taskList.appendChild(listItem)

    // Limpiar los inputs
    taskInput.value = ""

    // Enfoca el cursor en el input para facilitar el agregado de mas tareas
    taskInput.focus()
}

// Evento para el boton de  agregar
// Escuchamos el evento de click y si sucede se ejecuta agregarTarea
addTaskBtn.addEventListener("click", agregarTarea)
