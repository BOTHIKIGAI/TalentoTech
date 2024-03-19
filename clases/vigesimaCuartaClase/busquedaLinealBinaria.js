// Ejemplo de busquedad lineal o secuencial

function bSecuencial(arr, val) {
    for (let i = 0; i<arr.length; i++){
        if (arr[i] === val){
            return i++;
        }
        return -1;
    }
}

let arr = [1,3,56,4,5,2,7,60,8,9,43,6,23,46];
console.log(bSecuencial(arr, 60));
console.log(bSecuencial(arr, 56));


// ejercicio de busqueda binaria
// busqueda partiendo desde el array examinando si es menor o mayor el valor a buscar comparandolo con el array de la mitad
// 1. Debe estar organizado el array

function busquedaBinaria(arr, val, izq, der) {

    while (izq <= der){
        let mitad = Math.floor((izq + der)/2);
        let num = arr[mitad];
        if (num == val){
            return mitad;           
        } else if (val > num) {
            izq = mitad + 1;
        } else {
            der = mitad - 1;
        }
    }

    return -1;
}

let arreglo = [1,3,56,4,5,2,7,60,8,9,43,6,23,46];
console.log(arreglo.sort((a, b) => a - b));
console.log(busquedaBinaria(arreglo,56,0, arreglo.length - 1 ));

