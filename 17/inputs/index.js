// DOMContentLoaded -> evento el cual se realiza cuando se carga todo el contenido en el html
// No le va a dar comportamiento hasta que el html no este completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selectores de los elementos html

    // si usas querySelector los selectores son iguales que en css (. para clase, # para id, los tags se escriben x nombre)
    // getElementById solo escribis el nombre del id
    let text = document.querySelector("#text")
    let color = document.querySelector("#color")
    let fontSize = document.getElementById("fontSize")
    let bgColor = document.querySelector("#bgColor")
    let resultado = document.querySelector("#resultado")
    let body = document.querySelector("body")

    // Funciones
    // Actualizar el texto (basado en el input escribo en el parrafo)
    function actualizarTexto() {
        resultado.textContent = text.value
    }

    // Actualizar el color de texto
    function actualizarColor() {
        resultado.style.color = color.value
    }

    // Actualizar el tamaño de letra
    function actualizarTamanio() {
        resultado.style.fontSize = `${fontSize.value}px`
    }
    // Actualizar el color de fondo del body
    function actualizarBg() {
        body.style.backgroundColor = bgColor.value
    }

    // Eventos
    // Cuando se modifique el contenido del input, actualizo el parrafo con el contenido que tenia el input
    text.addEventListener("input", actualizarTexto)
    color.addEventListener("input", actualizarColor)
    fontSize.addEventListener("input", actualizarTamanio)
    bgColor.addEventListener("input", actualizarBg)
})