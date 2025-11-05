// Encapsulacion sirve para ocultar detalles internos y exponer solo lo necesario
// Palabra reservada class + nombre de la clase, primera letra en mayuscula

// Publico -> se puede acceder y modificar desde cualquier, por defecto
// Protegido -> solo se puede acceder y modificar solo desde las clases hijas
// privado -> solo se puede acceder desde la declaracion de la clase

// Podemos tener atributos privados que son ocultos y metodos privados que son ocultos
// generalmente son parte de la logica interna de la clase y no queremos que sean accedidos

class Auto{
    // Atributos
    precio
    marca
    modelo
    // Atributos privado
    #codigoInterno = 986
    #kilometraje = 0

    // Constructor -> funcion que permite a partir de "parametros" armar el objeto
    constructor(precio, marca, modelo){
        // This hace referencia a la class Auto
        this.precio = precio
        this.marca = marca
        this.modelo = modelo
    }

    // metodos
    // getters -> traen/retornan datos
    getPrecio(){
        return this.precio
    }

    // setters -> asignan valor a datos
    setPrecio(nuevoPrecio){
        return this.precio = nuevoPrecio
    }

    #getcodigoInterno(){
        return this.#codigoInterno
    }

    obtenerCodigoInterno(){
        return this.#getcodigoInterno()
    }

    getKilometraje(){
        return this.#kilometraje
    }

    conducir(kilometros){
        this.#kilometraje += kilometros
        return this.getKilometraje()
    }

}
// Usamos la palabra new para crear una instancia
let golTrend = new Auto(8000000, "volkswagen", "gol trend")

console.log(golTrend)
// Accedemos a los metodos y los atributos por "dot notation"
golTrend.setPrecio(12000000)
console.log(golTrend.obtenerCodigoInterno())

console.log(golTrend.getKilometraje())
golTrend.conducir(500)
console.log(golTrend.getKilometraje())

