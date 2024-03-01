// Arreglo
const arreglo = [
    {
        id: 1,
        languajes: "Java y C#",
        programacion: "Web y Escritorio",
    },
    {
        id: 2,
        languajes: "Python",
        programacion: "Web y Escritorio",
    },
    {
        id: 3,
        languajes: "Dart y Kotline",
        programacion: "Web y Movile",
    },
]

let arrayNum = [2,3,4,5,6,7,8,9,10,15];
let arraySum = arrayNum.map(element => element +10); // Sumar a cada valor +15, modificandolo, ejm. indice 1 = 1 se le suma  + 15
console.log(arraySum);

// Map ejercicio que me traiga lo que tenga los titulos
const titulo = arreglo.map(post => post.programacion);
console.log(titulo);

// Map ejercico que me traiga lo que tenga en programacion
const programacion = arreglo.map(post => post.languajes);
console.log(programacion);

// Some

// ¿existe algun elemento mayor a 10? true or false
let mayorQue = arrayNum.some(element => element > 10);
console.log(mayorQue);

// ¿existe algun elemento menor a 2? true or false
let menorQue = arrayNum.some(element => element < 2);
console.log(menorQue);

/* SORT */

const letras = ["b","a","c","e","d"];
console.log(letras);
let orderLetras = letras.sort(); // Ordenar un array de manera alfabetica
console.log(orderLetras);

let letras2 = ["b","a","c","e","d"];
let orderLetras2 = letras.sort((a,b)=>a-b); // Arreglar en descendente
console.log(orderLetras2);

let arrayNumDesorganizado = [23,5,2,6,7,1,9,13,56];
function comparar(a,b){
    return a - b;
}

let orderArrayNum = arrayNumDesorganizado.sort(comparar); // Organizar array por valores
console.log(orderArrayNum);

const listnuma = [1,2,3,4,5];
console.log(listnuma.includes(8));
console.log(listnuma.includes(5));


let letras4 = ["b","a","c","e","d"];
let stringletra4 = letras4.join("-");
console.log(stringletra4);

/* Reduce */
arrayNumDesorganizado = [23,5,2,6,7,1,9,13,56];
const sumatori = arrayNumDesorganizado.reduce((acum, res) => acum + res);
console.log(sumatori);

/* IndexOf */
arrayNumDesorganizado = [23,5,2,6,7,1,9,13,56];
const indexArrayValeu = arrayNumDesorganizado.indexOf(7);
console.log(indexArrayValeu);

