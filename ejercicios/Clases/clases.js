// Requisitos
/* 
    Hacer un proyecto que contenga una clase principal con la cual
    aplicar herencia en otras 2 clases, aplicar el polimorfismo y 
    metodos propios si los tiene.
*/

// Ejercio que pregunte a chat
/*
    Crea una jerarquía de clases que representen diferentes formas geométricas,
    como círculos y rectángulos. Cada forma geométrica debe tener un método para
    calcular su área. Utiliza el concepto de polimorfismo para asegurarte de que
    cada forma geométrica pueda calcular su área de manera adecuada. Luego, crea
    algunas instancias de estas formas geométricas y muestra sus áreas en la 
    consola.
*/

// Clase pricipal
class Figura{
    constructor(){

    }

    // Methods
    area(){ // Calcular el area de la figura
        return `El area de la figura es: `;
    }
    perimetro(){ // Calcular el perimetro de la figura
        return `El perimetro de la figura es: `;
    }
    descripcion(){ // Descripcion de la figura
        return `Caracteristicas de figura: `;
    }
}

// Clases hijas
class Cuadrado extends Figura{
    // Constructor
    constructor(lado){
        super();
        this._lado = lado;
    }
    // Get
    get getLado(){
        return this._lado;
    }
    // Set
    set setLado(lado){
        this._lado = lado;
    }
    // Override Methods
    area(){
        return super.area() + (this._lado * this._lado);
    }
    perimetro(){
        return super.perimetro() + (this._lado * 4);
    }
    descripcion(){
        return super.descripcion() + `Cuadrado con cuatro lados de una longitud de ${this._lado} cm`;
    }
}

class Circulo extends Figura{
    // Constructor
    constructor(radio){
        super();
        this._radio = radio;
    }
    // Get
    get getRadio(){
        return this._radio;
    }
    // Set
    set setRadio(radio){
        this._radio=radio;
    }
    // Methods
    area(){
        return super.area() + (Math.PI * (this._radio*this._radio));
    }
    perimetro(){
        return super.perimetro() + ((Math.PI * 2) * this._radio);
    }
    descripcion(){
        return super.descripcion() + `Circulo con un radio de ${this._radio}`
    }
}

// Instanciar
let cuadrado = new Cuadrado(5);
console.log(cuadrado.area());
console.log(cuadrado.perimetro());
console.log(cuadrado.descripcion());

let circulo = new Circulo(5);
console.log(circulo.area());
console.log(circulo.perimetro());
console.log(circulo.descripcion());
