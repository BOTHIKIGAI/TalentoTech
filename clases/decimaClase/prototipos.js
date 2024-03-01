function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.caminar = function() {
    console.log("Debo caminar a todos los dias");
}

const Administrador = new Persona("Juanes", 21);
const Mecanico = new Persona("Esteban", 21);

console.log(Administrador);
console.log(Mecanico);



// Definición de la clase Persona
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Definición de la clase Ingeniero
function Ingeniero(nombre, edad, correo) {
    Persona.call(this, nombre, edad); // Llama al constructor de Persona con los parámetros necesarios
    this.correo = correo;
}

// Establece la herencia prototípica de Persona para Ingeniero
Ingeniero.prototype = Object.create(Persona.prototype);
Ingeniero.prototype.constructor = Ingeniero;

// Métodos adicionales para Ingeniero
Ingeniero.prototype.caminar = function() {
    console.log("Me levanto a las 6 am a caminar");
}

Ingeniero.prototype.trabajar = function() {
    console.log("Me levanto a las 6 am a trabajar");
}

// Creación de una instancia de Ingeniero
const hombre = new Ingeniero("Raul", 30, "raul@example.com");

console.log(hombre);