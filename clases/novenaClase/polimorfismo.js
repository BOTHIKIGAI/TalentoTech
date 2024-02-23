// { POLIMORFISMO }
class Persona {
    // Constructor
    constructor(nombre, edad){
        this._nombre=nombre;
        this._edad=edad;
    }
    // Methods
    datos(){ // Retornar nombre y edad0
        return `Mi nombre es: ${this._nombre} y mi edad es: ${this._edad}`;
    }
    polimorfismo(){ // Retornar la funcion de datos
        return this.datos();
    }
}   

class Profesor extends Persona{
    // Constructor
    constructor(nombre, edad, materia){
        super(nombre, edad);
        this._materia = materia;
    }
    // Methods
    polimorfismo(){ // Sobre escribir metodo
        return `${super.datos()} dicta la siguiente materia: ${this._materia}`;
    }
}

class Estudiante extends Persona{
    // Constructor
    constructor(nombre, edad, grado){
        super(nombre, edad);
        this._grado = grado;
    }
    // Methods
    polimorfismo(){
        return `${super.datos()} se encuentra en el grado: ${this._grado}`;
    }
}

// Instanciar clases
let profesorA = new Profesor("Edgar", 40, "Calidad de Software");
console.log(profesorA.polimorfismo());

let estudianteA = new Estudiante("Juan", 20, "Tercer trimestre");
console.log(estudianteA.polimorfismo());