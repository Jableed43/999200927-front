// Abstraccion, se orienta a la simplificacion, que necesita saber el usuario

class Calculadora {
    #historial

    constructor(){
        this.#historial = []
    }

    // metodos

    #guardarEnHistorial(a, b, operacion, resultado){
        this.#historial.push({ a, b, operacion, resultado, fecha: new Date().toLocaleString() })
    }

    // Las operaciones ocultan el manejo del historial
    sumar(a, b){
        let resultado = a + b
        this.#guardarEnHistorial(a, b, "sumar", resultado)
        return resultado
    }

    restar(a, b){
        let resultado = a - b
        this.#guardarEnHistorial(a, b, "restar", resultado)
        return resultado
    }

    multiplicar(a, b){
        let resultado = a * b
        this.#guardarEnHistorial(a, b, "multiplicar", resultado)
        return resultado
    }

    dividir(a, b){
        let resultado = a / b
        this.#guardarEnHistorial(a, b, "dividir", resultado)
        return resultado
    }

    getHistorial(){
        return this.#historial
    }
}

let calculadora = new Calculadora()
calculadora.sumar(2, 2)
calculadora.restar(2, 2)
calculadora.multiplicar(2, 2)
calculadora.dividir(2, 2)
console.log(calculadora.getHistorial())