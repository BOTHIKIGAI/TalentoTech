/* Decima septima clase */
function Stack() {
    this._size = 0; // indice de inicio
    this._storage = {}; // almacenamiento de los elementos
}
// Funcion para agregar elementos a _store
Stack.prototype.push = function(data) { // Funcion data
    var size = ++this._size; // Aumenta a mas uno _size para definir el indice
    this._storage[size] = data; // Asigna el valor de data al indice de size
};

// Funcion para eliminar un elemento
Stack.prototype.pop = function() { 
    var size = this._size,deletedData; // recupera el valor actual y llama a deleteData 
    if (size) {
        deletedData = this._storage[size]; // Recupera el valor a eliminar en base al size
        delete this._storage[size]; // Elimina el indice
        this._size--; // Baja el valor de size a 1
        return deletedData; // Retunrna deleteData (el elementos que se extrajo y elimino)
    }
}; 

// Instanciamiento

 // Se instancia dentro de una variable
var myStack = new Stack();

// Agregar elementos
myStack.push('Python');
myStack.push('.NET');
myStack.push('Laravel');
myStack.push('Flutter');

console.log(myStack._storage); // Imprimir elementos de myStack en _storage

myStack.pop(); // Eliminar el ultimo valor ingresado
console.log(myStack._storage); // Imprimir elementos de myStack en _storage
console.log(myStack._size); // Longitud de la pila