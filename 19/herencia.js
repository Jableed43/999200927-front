// Herencia: Permite crear nuevas clases basadas en clases existentes
// heredando atributos y metodos

// Vehiculo -> Auto -> Deportivo / Sedan / Coupe / SUV / de carrera
// Vehiculo -> auto, lancha, bicicleta, moto, avion, helicoptero, patineta

class Vehiculo {
    // Atributos
    marca
    modelo

    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }

    // metodo
    arrancar(){
        console.log("El vehiculo arrancó")
    }

}
// Clase hija - la palabra reservada extends permite utilizar la clase padre para heredar
class Camioneta extends Vehiculo{
    puertas

    constructor(marca, modelo, puertas){
        // Debemos llamar al constructor del padre
        // super -> super clase, se refiere a la clase padre
        super(marca, modelo)
        this.puertas = puertas
    }

    abrirPuertas(){
        console.log("Abriendo puertas")
    }
}

let f100 = new Camioneta("ford", "f100", 2)
f100.arrancar()
f100.abrirPuertas()
console.log(f100);

