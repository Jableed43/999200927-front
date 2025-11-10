// Esperar hasta que el dom este completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    // Inicializar las variables
    let likeCounter = 0

    // Selectores - Referencias del DOM
    // incrementa los likes
    const likeButton = document.getElementById("likeButton")
    // muestra el valor numerico de likes
    const likeCountDisplay = document.getElementById("likeCount")
    // resetea el conteo de likes
    const resetLikeCount = document.getElementById("resetLikeCount")

    // carga los me gusta desde la memoria (localStorage)
    // los cargamos al html (span)
    function loadLikes() {
        // ver si existe el valor guardado
        const savedCount = localStorage.getItem("myLikeCount")

        // si savedCount existe y es un numero
        if(savedCount !== null && !isNaN(savedCount)){
            // parse -> cambia tipo de dato <string -> number>
            // convertimos string a enteros
            // nuestro contador lo igualamos al valor guardado en localStorage
            likeCounter = parseInt(savedCount)
            // actualizar el display con el dato almacenado
            likeCountDisplay.textContent = likeCounter
        }
    }

    // Funcion que guarda los likes en localStorage
    function saveLikes() {
        // Guardamos el valor actual
        localStorage.setItem("myLikeCount", likeCounter)
    }

    // Incrementa los likes
    likeButton.addEventListener("click", () => {
        // Incrementamos los likes
        // likeCounter = likeCounter + 1
        likeCounter++
        // actualizamos el html coon el nuevo numero 
        likeCountDisplay.textContent = likeCounter
        saveLikes()

        // efecto pop
        likeCountDisplay.classList.add("pop")

        // quitar el efecto pop
        setTimeout(()=> {
            likeCountDisplay.classList.remove("pop")
        }, 200)
    })

    resetLikeCount.addEventListener("click", ()=> {
        // pasamos contador a 0
        likeCounter = 0
        // mostramos 0 en display
        likeCountDisplay.textContent = likeCounter
        // guardamos los likes , sincroniza todos los valores a 0
        // likeCounter -> variable que va a transportar el valor
        // localStorage-myLikeCount -> persistencia del dato
        // likeCountDisplay -> mostrar en pantalla

        saveLikes()

        loadLikes()
    })


    loadLikes()
})