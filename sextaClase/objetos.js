// POO

// { Primer Ejemplo }
/* const Animal = {
    id: 1,
    nombre: "perro",
    color: "negro"
};

console.log(Animal.nombre);
console.log(Animal.color);
 */


// { Segundo Ejemplo }
/* class Animal 
{
    constructor() // Constructor vacio
    {
        this.id = 1;
        this.nombre = "perro";
        this.color = "negro";
    }
}

const perro = new Animal();
console.log(perro); */

// { Tercer Ejemplo }
/* class Animal 
{
    constructor(id, nombre, color) // Constructor con parametros
    {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }

    result() // Metodo
    {
        return `El animal es un ${this.nombre} de color ${this.color}`;
    }
}

const perro = new Animal(1, "perro", "negro"); // Instanciando objetos
const gato = new Animal(2, "gato", "gris");


console.log(perro, gato);
console.log(perro.result(),"\n",gato.result()); */

// { Cuarto Ejemplo }
/* class Tigre extends Animal // Herencia
{
    constructor(id, nombre, color, raza) // Constructor con herencia
    {
        super(id, nombre, color); // 
        this.raza = raza;
    }

    atacar()
    {
        return `El tigre ${this.raza} de color ${this.color} esta atacando`;
    }
}

const tigreA = new Tigre(1, "Manolo", "Blanco y Gris", "Bengala");
console.log(tigreA.atacar());
const tigreB = new Tigre(2, "Lucas", "Anaranjado Blanco", "Siberiano");
console.log(tigreB.atacar()); */

// { Quinto Ejemplo }
