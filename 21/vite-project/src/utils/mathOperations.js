import { useState } from "react";

export const mathOperations = {
  suma: (a, b) => {
    return a + b;      
  },
  resta: (a, b) => {
    if( a < b ){
        console.error("Error: No se puede restar un numero mayor a un numero menor")
    }
    return a - b
  },
  multiplicacion: (a, b) => a * b,
  division: (a, b) => {
    if (b === 0) {
      console.error("Error: No se puede dividir por cero");
      return 0;
    }
    if (a < b) {
      console.warn(
        "Advertencia: Estas intentando dividir un numero menor por un numero mayor"
      );
      return 0;
    }
    return a / b;
  },
};
