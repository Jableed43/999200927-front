import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import { mathOperations } from './utils/mathOperations'
import OperationButton from './components/OperationButton'

function App() {
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
        <Input label="Numero 1" value={num1} labelId="input-numero-1" onChange={handleNum1Change}  type="number" />

        <Input label="Numero 2" value={num2} labelId="input-numero-2" onChange={handleNum2Change} type="number" />

        {/* Botones 1 x operacion */}
        <div>
          <OperationButton operacion="sumar" callBack={handleOperacion}  />
          <OperationButton operacion="restar" callBack={handleOperacion}  />
          <OperationButton operacion="multiplicar" callBack={handleOperacion}  />
          <OperationButton operacion="dividir" callBack={handleOperacion}  />
        </div>

        <p> Resultado: {resultado} </p>
      </div>
    </>
  )
}

export default App
