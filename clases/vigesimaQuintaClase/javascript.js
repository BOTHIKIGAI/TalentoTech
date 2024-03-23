/* Merge sourt con prototipo */
Array.prototype.mergesourt = function() {
    
    // Primera evaluación de si la longitud del array es menor o igual a uno
    if (this.length <= 1) { 
        return this; // Retorna el array
    }

    // Instanciar variables 
    let mitad = parseInt(this.length/2); // La longitud del array dividida en dos 
    let izq = this.slice(0, mitad).mergesourt(); // Definmos una array que tiene los elementos de izquierda va del indice 0 a la mitad
    let der = this.slice(mitad, this.length).mergesourt(); // Definirmos un array que tiene los elementos que tiene derecha va desde la mitad hasta el final del array

    // Funcion donde se realizara la busquedad
    let mezcla = function(izq, der) {
        let dato = []; // Array donde se orgniazara 

        // mientras la izquierda sea mayor a 0 y derecha sea mayor a 0
        while (izq.length > 0 && der.length > 0) {
            // ondición ? expresión_si_verdadera : expresión_si_falsa
            dato.push(izq[0]<= der[0] ? izq.shift() : der.shift());
            // si izquierda es menor a derecha entonces se agregar izquierda a dato, si no derehca se agregara a dato
        }
        
        return dato.concat(izq).concat(der);
    }

    return mezcla (izq,der);
}

let numeros = [12,9,8,3,24,56,12,19,4,13,5,17,11];
console.log(numeros);
console.log(numeros.mergesourt());

