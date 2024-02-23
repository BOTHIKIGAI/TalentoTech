// ** Iniciarlizar variable ** 
let mensaje;
let numeroA;
let numeroB;
let verdadero;
let falso;
const mostrar = "esto es una constante"; // Las constantes no se puede inicializar vacias 
let y; 
let x;
let variable;
let lista;


// ** Valor de la variables **
mensaje = "hola mundo"; // Mensaje -> string
numeroA = 3; // numero -> int
numeroB = 3.4; // numero -> float
verdadero = true; // verdadero -> bool
falso = false; // false -> bool

// ** Practica **

/* Alert función para mostrar una alerta con un mensaje dentro del parentesis */
// alert(mensaje);

/* 
   Imprimir en la consola del navegador un mensaje mediante la clase
   console llamando el metodo log, entre parentesis el valora  imprimir.
   Se puede imprimir varios datos, siempre y cuando uno lo separe por comas.
*/

// console.log('Hola Mundo');
console.log(mensaje, numeroA, numeroB); 

// Cambiar tipo de dato de variables al cambiar su valor
mensaje = 1; // Mensaje fue string y ahora es int

// Saber el tipo de dato
console.log(typeof(mensaje)); // Imprimira el tipo de dato que en este caso sera number
mensaje = "hola mundo"; // Mensaje ahora almacenara un String
console.log(typeof(mensaje)); // Imprimira el tipo de dato el cual con el cambio sera string

// Operadores aritmeticos
console.log(numeroA + numeroB); // Suma
console.log(numeroA - numeroA); // Resta
console.log(numeroA * numeroB); // Multiplicar
console.log(numeroA ** numeroB); // Expoenente
console.log(numeroA / numeroB); // División
console.log(numeroA % numeroB) // Modulo

// Operador aritmetico 
console.log(numeroA++); // Incrementar mas uno
console.log(numeroA--); // Decrimento menos uno

// Operador logico
console.log (numeroA < numeroB);
console.log (numeroA > numeroB);
console.log (numeroA == numeroB);
console.log (numeroA < numeroB);

// Operador de condicional

y = 5; // Definir valor para y

if ( y > 2 && y <= 5 ) {

    console.log("Y es mayor que 2 y igual a 5")

}

else if ( y < 2 || y > 1) {

    console.log("Menor que dos mayor que 1");

}
else {

    console.log("Es menor o igual a 2");

}

// Switch and case
variable = 3;

switch (variable) {
    case 1:
        console.log("Variable es igual a uno");
        break;
    case 2:
        console.log("Variable es igual a 2");
        break;
    case 3:
        console.log("Variable es igual a 3");
        break
    default:

}

// Bucles

    // For
for(let i = 0; i < 10; i++) {
    console.log("Me repito " + i);
}

    // For each
lista_persona =[
    {"nombre" : "Juanes", "tipo" : "persona", "id" : 435},
    {"nombre" : "Niyi", "tipo" : "persona", "id" : 214},
    {"nombre" : "Milan", "tipo" : "mascota", "id" : 144}
]

    for (let personas of lista_persona) {
        console.log(personas.nombre, personas.tipo, personas.id);
    }

// Ejercicio factoria

const n = 6;
var fact = 1;

for(let i = 1; i <= n; i++) {
    fact *= i;
}

console.log("El factorial de " + n  + " es " + fact);
