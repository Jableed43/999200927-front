// Seres vivos -> Animal -> Perro/ Gato/ Elefante/ Girafa

class Animal{
    hacerSonido(){
        return "El animal hace un sonido"
    }
}

class Perro extends Animal{
    nombre

    constructor(nombre){
        // Aunque el padre no tenga atributos se le debe pasar super()
        super()
        this.nombre = nombre
    }

    // Sobreescribir el metodo del padre
    hacerSonido(){
        return "Guau Guau!"
    }
}

class Gato extends Animal{
    nombre
    techosConquistados

    constructor(nombre, techosConquistados){
        // Aunque el padre no tenga atributos se le debe pasar super()
        super()
        this.nombre = nombre
        this.techosConquistados = techosConquistados
    }

    hacerSonido(){
        return "Miau Miau!"
    }
}

let animal = new Animal
console.log(animal.hacerSonido());

let perro = new Perro("Toby")
console.log(perro, perro.hacerSonido());

let gato = new Gato("Bola de nieve", 2)
console.log(gato, gato.hacerSonido());
