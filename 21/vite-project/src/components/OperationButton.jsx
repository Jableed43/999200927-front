// Responsabilidad: Crear el boton, utilizando un callback le brinda comportamiento a cada boton a traves de un evento onClick
function OperationButton({operacion, callBack}) {
    // Callback es una funcion que se pasa como parametro de otra funcion
    // La funcion que gobierna al callback controla su ejecucion y el argumento de su parametro
  return (
    <button onClick={() => callBack(operacion)} > {operacion} </button>
  )
}

export default OperationButton

