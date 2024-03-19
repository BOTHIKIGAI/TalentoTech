function merge(left, right) {
    let arr = [] // Crear un array vacío para almacenar los elementos ordenados
    
    // Salir del bucle si alguno de los dos arrays se queda vacío
    while (left.length && right.length) {
        // Elegir el elemento más pequeño entre el primer elemento de los subarrays izquierdo y derecho
        if (left[0] < right[0]) {
            arr.push(left.shift())  // Agregar el primer elemento del subarray izquierdo a 'arr' y eliminarlo de 'left'
        } else {
            arr.push(right.shift()) // Agregar el primer elemento del subarray derecho a 'arr' y eliminarlo de 'right'
        }
    }
    
    // Concatenar los elementos restantes
    // (en caso de que no hayamos recorrido completamente los arrays 'left' o 'right')
    return [ ...arr, ...left, ...right ] // Combinar 'arr' con los elementos restantes de 'left' y 'right' y devolver el resultado
}



function mergeSort(array) { 
    const half = array.length / 2 // Calcula la mitad del tamaño del array

    // Base case o caso de término
    if(array.length < 2){
        return array // Si el array tiene menos de 2 elementos, está ordenado, se devuelve el array
    }
    
    // Divide el array en dos mitades
    const left = array.splice(0, half)
    /* splice() es un método en JavaScript que 
       puede ser utilizado para eliminar elementos 
       de un array y, opcionalmente, insertar nuevos 
       elementos en su lugar. Su sintaxis es: 
       
       array.splice(start, deleteCount, item1, item2, ...)

       start: Índice en el que comenzará la modificación del array.
       deleteCount: Número opcional que indica cuántos elementos deben ser eliminados del array a partir del índice start.
       item1, item2, ...: Elementos opcionales que se insertarán en el array en lugar de los elementos eliminados.
       
       */
    
    // Llama recursivamente a mergeSort() para ordenar las dos mitades y luego mezcla las mitades ordenadas.
    return merge(mergeSort(left),mergeSort(array))
}


array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));