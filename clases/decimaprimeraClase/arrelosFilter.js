let numeros = [1,45,7,2,5,89,2,3, 5789,96,4,62,892,54];
let pares = numeros.filter(value => value % 2 == 0);
let impares = numeros.filter(value => value % 2 == 1);
console.log("Pares => " + pares);
console.log("Impares => " + impares);