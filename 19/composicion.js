class Genero {
    nombre
    constructor(nombre){
        this.nombre
    }
}

class Pais {
    nombre
    continente
    poblacion
    constructor(nombre, continente, poblacion){
        this.nombre = nombre
        this.continente = continente
        this.poblacion = poblacion
    }
}

class Persona {
    nombre
    constructor(nombre){
        this.nombre = nombre
    }
}

class Autor extends Persona{
    paisOrigen
    constructor(nombre, paisOrigen){
        super(nombre)
        this.paisOrigen = paisOrigen
    }
}

class Libro{
    titulo
    ISBN
    genero
    autor

    constructor(nombre, ISBN, genero, autor){
        this.nombre = nombre
        this.ISBN = ISBN
        this.genero = genero
        this.autor = autor
    }
}

let inglaterra = new Pais("Inglaterra", "Europa", 56500000)

let jkRowling = new Autor("Jk Rowling", inglaterra)

let fantasia = new Genero("Fansatia")

let harryPotter = new Libro("Prisionero de askaban", "jk34", fantasia, jkRowling)