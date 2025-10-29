// Selectores

const list = document.querySelector(".lista-desordenada")
const listItem = document.getElementsByClassName("list-item")
const texto = document.querySelector(".texto")
const contenedorMagico = document.querySelector(".contenedor-magico")
const itemEspecial = document.querySelector("#item-especial")

// Funciones
// A traves de una funcion creamos un elemento y lo añadimos a la lista
// Crea y añade un elemento al final de la lista
function crearElementoListaFinal() {
    // createElement
    let newLi = document.createElement("li")
    newLi.textContent = "Elemento creado al final del listado"
    // A la lista de clases del elemento le añado "list-item"
    newLi.classList.add("list-item")
    // añade un elemento al final, similar al push
    list.appendChild(newLi)
}

// Añade un elemento al inicio
function crearElementoListaInicial() {
    let newLi = document.createElement("li")
    newLi.textContent = "Elemento creado al inicio"
    // A la lista de clases del elemento le añado "list-item"
    newLi.classList.add("list-item")
    // insertBefore -> inserta elemento antes que otro
    // 1° parametro el elemento a insertar
    // 2° parametro la ubicacion donde queremos insertarlo
    list.insertBefore(newLi, listItem[0])
}

// Eliminar un elemento al final
function eliminarUltimoElemento() {
    // removeChild -> elimina el hijo de un elemento
    list.removeChild(listItem[listItem.length - 1])
}

// Eliminar un elemento al inicio
function eliminarPrimerElemento() {
    list.removeChild(listItem[0])
}


// Añadirle texto al parrafo texto
function modificarTexto() {
    // innerHTML -> Interpreta HTML, puede crear etiquetas
    texto.innerHTML = "<a href='http://www.google.com'> Google </a>"
}

// Creamos elementos dentro de contenedorMagico
function crearElementos() {
    contenedorMagico.innerHTML = `
        <ul>
            <li> <h1> Soy un li magico 1 </h1> </li>
            <li> <p class="verde"> Soy un li magico 2  </p> </li>
            <li> <span> Soy un li magico 3 </span> </li>
        </ul>
    `
}

//item-especial
// Trabajaremos con atributos y estilos
function agregarAtributo() {
    // setAttribute-> recibe atributo y valor para modificar en el elemento
    // reemplaza lo existente en ese atributo
        itemEspecial.setAttribute("class", "rojo")
}

function agregarAtributoToggle() {
    // toggle -> prende/ apaga segun el estado actual 
        itemEspecial.classList.toggle("rojo")
}

function agregarClase() {
    itemEspecial.classList.add("bold")
}

function removerClase() {
    itemEspecial.classList.remove("bold")
}
// Removemos el atributo clase
function quitarAtributo() {
    itemEspecial.removeAttribute("class")
}