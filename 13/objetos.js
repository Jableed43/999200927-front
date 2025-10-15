// Los objetos pueden representar cualquier cosa de la vida real en terminos de datos
// Sirven para moldear entidades

let persona = {
    nombre: "javier",
    apellido: "lopez",
    hobbies: ["lectura", "musica", "cocina"],
    profesion: {
        nombre: "Desarrollo web",
        desde: 2020,
        seniority: "ssr"
    },
    edad: 33,
    telefono: {
        tipo: "celular",
        num: "11-1111-1111"
    },
    saludar: () => {
        console.log("Hola ", persona.nombre)
    },
    mascotas: null
}

console.log(persona.nombre)
persona.apellido
persona.saludar()
persona.nombre = "Fernando"
console.log(persona.nombre)
persona.saludar()
console.log(persona.hobbies[2])
console.log(persona.profesion.nombre)