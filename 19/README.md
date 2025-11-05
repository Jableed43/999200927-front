# 📚 Programación Orientada a Objetos (POO) con JavaScript

## 🎯 ¿Qué es la Programación Orientada a Objetos?

La **Programación Orientada a Objetos (POO)** es un paradigma de programación que organiza el código en torno a **objetos** que contienen tanto datos (atributos) como código (métodos). Es como crear "plantillas" que definen cómo deben comportarse ciertos elementos de nuestro programa.

### 🔧 Conceptos Fundamentales

- **Atributos** → Datos que describen el objeto
- **Métodos** → Funciones que definen las acciones del objeto
- **Clase** → Molde o plantilla para crear objetos
- **Objeto** → Instancia específica de una clase

---

## 🤔 ¿Por qué usar POO?

### ✅ **Ventajas Principales**

- **📋 Organización**: Más fácil de entender y mantener
- **🔄 Reutilización**: Podemos crear múltiples objetos de la misma clase
- **📈 Escalabilidad**: Fácil agregar nuevas funcionalidades
- **🎯 Abstracción**: Te enfocas en qué hace el objeto, no en cómo lo hace
- **🌍 Representación**: Sirve para representar objetos de la vida real

---

## 🏗️ Conceptos Básicos

### 📋 **Clase**
Es un molde o plantilla que define:
- **Características del objeto** (Atributos)
- **Acciones que realiza** (Métodos)

### 🚗 **Objeto**
Es una instancia de una clase. Es el resultado de usar el molde.

### 📊 **Ejemplo Práctico**

```javascript
// CLASE Auto (molde)
class Auto {
    constructor(color, marca, año, modelo, km) {
        this.color = color;    // Atributo
        this.marca = marca;   // Atributo
        this.año = año;       // Atributo
        this.modelo = modelo; // Atributo
        this.km = km;         // Atributo
    }
    
    arrancar() {              // Método
        console.log("El auto ha arrancado");
    }
}

// OBJETO Fiat Siena (instancia)
const fiatSiena = new Auto("azul", "fiat", 2009, "siena", 100000);
```

**Resultado:**
- **color**: azul
- **marca**: fiat
- **año**: 2009
- **modelo**: siena
- **km**: 100000
- **arrancar()**: función disponible

---

## 🎨 Los 4 Pilares de la POO

### 1. 📦 **Encapsulación**
Ocultar detalles internos del objeto y exponer solo lo necesario.

**Beneficios:**
- ✅ Seguridad y control
- ✅ Protección de datos
- ✅ Interfaz clara

**Niveles de acceso:**
- **Público**: Accesible desde cualquier lugar
- **Privado**: Solo accesible dentro de la clase
- **Protegido**: Accesible en la clase y sus subclases

### 2. 👨‍👩‍👧‍👦 **Herencia**
Crear nuevas clases basadas en clases existentes, heredando sus características.

```javascript
// Clase padre
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

// Clase hija
class Auto extends Vehiculo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo); // Llama al constructor padre
        this.puertas = puertas;
    }
}
```

### 3. 🎭 **Polimorfismo**
Permite que diferentes objetos respondan de forma diferente a la misma situación.

```javascript
class Animal {
    hacerSonido() {
        console.log("El animal hace un sonido");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("Guau guau!"); // Comportamiento diferente
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("Miau miau!"); // Comportamiento diferente
    }
}
```

### 4. 🎯 **Abstracción**
Se enfoca en características esenciales del objeto, ocultando detalles innecesarios.

```javascript
class Calculadora {
    sumar(a, b) {
        return a + b; // Solo expone lo necesario
    }
    
    // Los detalles internos están ocultos
}
```

---

## 🔧 Conceptos Avanzados

### 🏗️ **Constructor**
Es un método que se ejecuta automáticamente cuando creas un objeto y asigna a este los valores que se le pasan como parámetros.

```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre; // Asigna valores
        this.edad = edad;     // Asigna valores
        console.log("Persona creada");
    }
}

const persona = new Persona("Juan", 25); // Se ejecuta automáticamente
```

### 🧩 **Composición**
Armar clases más complejas a partir de clases más simples.

```javascript
class Motor {
    constructor(potencia) {
        this.potencia = potencia;
    }
}

class Auto {
    constructor(marca, motor) {
        this.marca = marca;
        this.motor = motor; // El auto TIENE un motor
    }
}

const motor = new Motor(150);
const auto = new Auto("Toyota", motor);
```

---

## 🚀 Ventajas de la POO

### ✅ **Para el Desarrollo**
- **Código más organizado** y fácil de mantener
- **Reutilización** de código existente
- **Escalabilidad** para proyectos grandes
- **Colaboración** en equipos de desarrollo

### ✅ **Para el Aprendizaje**
- **Pensamiento estructurado** y lógico
- **Representación** de problemas del mundo real
- **Fundamentos** para frameworks modernos
- **Preparación** para tecnologías avanzadas

---

## 📚 Ejemplos Prácticos

### 📖 **Clase Libro**
```javascript
class Libro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.leido = false;
    }
    
    leer() {
        this.leido = true;
        console.log(`Leyendo ${this.titulo}`);
    }
}
```

### 👤 **Clase Usuario**
```javascript
class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        this.activo = true;
    }
    
    desactivar() {
        this.activo = false;
    }
}
```

---

## 🎓 Resumen

La **Programación Orientada a Objetos** es fundamental para:

1. **📋 Organizar** código de manera lógica
2. **🔄 Reutilizar** código existente
3. **📈 Escalar** proyectos grandes
4. **🎯 Abstraer** complejidad innecesaria
5. **🌍 Representar** problemas del mundo real

### 💡 **Consejo Final**
> **"La POO te ayuda a pensar como un programador profesional, organizando tu código de manera que sea fácil de entender, mantener y extender."**

---

