class Libro{
    titulo
    ISBN
    genero
    autor

    constructor(titulo, ISBN, genero, autor){
        this.titulo = titulo
        this.ISBN = ISBN
        this.genero = genero
        this.autor = autor
    }

    getInfo(){
        return {
           titulo: this.titulo,
           ISBN: this.ISBN,
           genero: this.genero,
           autor: this.autor
        }
    }
}
// Inputs
const titulo = document.getElementById("titulo")
const isbn = document.getElementById("isbn")
const genero = document.getElementById("genero")
const autor = document.getElementById("autor")

const lista = document.getElementById("lista-libros")
const boton = document.getElementById("crear-libro")

const form = document.getElementById("form")

const libros = []

function crearLibro() {
    const nuevoLibro = new Libro(
        titulo.value,
        isbn.value,
        genero.value,
        autor.value
    )
    // añadimos el nuevo libro al listado
    libros.push(nuevoLibro)
}

// Tenemos que mostrar en el listado el nuevo libro que creamos
function actualizarLista() {
    lista.innerHTML = libros.map((libro) => `
        <li>
            <strong> ${libro.titulo} </strong> <br>
            Autor: ${libro.autor} <br>
            Genero: ${libro.genero} <br>
            ISBN: ${libro.ISBN}
        </li>
    ` ).join("")
}

function limpiarFormulario() {
    titulo.value = ""
    isbn.value = ""
    genero.value = ""
    autor.value = ""
}

form.addEventListener("submit", (e) => {
    // Previene el comportamiento por defecto del formulario
    // Evita que refresque la pagina
    e.preventDefault()
    crearLibro()
    actualizarLista()
    limpiarFormulario()
})