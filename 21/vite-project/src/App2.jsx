import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import { mathOperations } from './utils/mathOperations'
import OperationButton from './components/OperationButton'

function App2() {
  // Cuando hablamos de form/ input controlado, queremos decir que
  // se relaciona directamente con un estado
  // const [estado, setEstado] = useState(valor por defecto)
  // setEstado asigna el valor al estado
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [resultado, setResultado] = useState(0)

  // Observamos cambios a partir de los eventos
  // Input -> onChange
  // Form -> onSubmit
  // Button -> onClick

  // Handler -> Manejador
  const handleNum1Change = (evento) => {
    // Usamos el evento cuando queremos obtener el valor
    // valor del input -> evento.target.value
    // con Number pasamos string a number "8" -> 8
    // el target de un evento es el elemento sobre el que se ejecuta
    setNum1(Number(evento.target.value))
  }

  const handleNum2Change = (evento) => {
    setNum2(Number(evento.target.value))
  }

  const handleOperacion = (operacion) => {
    switch (operacion) {
      case "sumar":
        setResultado(mathOperations.suma(num1, num2))
        break;
      case "restar":
        setResultado(mathOperations.resta(num1, num2))
        break;
      case "dividir":
        setResultado(mathOperations.division(num1, num2))
        break;
      case "multiplicar":
        setResultado(mathOperations.multiplicacion(num1, num2))
        break;
      default:
        setResultado(0)
        break;
    }
    // Si finalizamos la operacion positivamente o negativamente
    // debemos pasar los inputs a 0
    setNum1(0)
    setNum2(0)
  }


  return (
    <>
      <div>
        <h1> Calculadora </h1>

        {/* // Inputs para A y para B */}
         <div>
            <label htmlFor="input-numero-1">Numero 1</label>
            <input type="number" value={num1} onChange={handleNum1Change} id="input-numero-1" />
        </div>

        <div>
            <label htmlFor="input-numero-2">Numero 2</label>
            <input type="number" value={num2} onChange={handleNum2Change} id="input-numero-2" />
        </div>
        {/* Botones 1 x operacion */}
        <div>
              <button onClick={() => handleOperacion("sumar")} > sumar </button>
              <button onClick={() => handleOperacion("restar")} > restar </button>
              <button onClick={() => handleOperacion("multiplicar")} > multiplicar </button>
              <button onClick={() => handleOperacion("dividir")} > dividir </button>
        </div>

        <p> Resultado: {resultado} </p>
      </div>
    </>
  )
}

export default App2
