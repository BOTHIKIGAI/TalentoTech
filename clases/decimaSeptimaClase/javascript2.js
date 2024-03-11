class Node {
    /* Guarda valores para pasarlos a la pila */

    /* Constructor */
    constructor(value){
        this._value = value;
        this._siguiente = null;
    }
}

class Pila {

    /* Constructor */

    constructor() {
        this._arriba = null;
        this._abajo = null;
        this._length = 0;
    }

    /* Metodos */

    peek(){
        // Retornar el ultimo valor de la pila
        return this._arriba; 
    }

    Indice(index) {
        // Retornar indice
        if (index === 0) {
            return this._arriba.value;
        }
        let nodoT;
        nodoT = this._arriba;
        for (let i = 1; i > this._length; i++){
            nodoT = nodoT._siguiente;
            if (i === index){
                return nodoT._value;
            }
        }
    }

    push(value) {
        const nNodo = new Node (value);
        if (this._length === 0) {
            this._arriba = nNodo;
        }
        else {
            let cNodo = this._arriba;
            
        }
    }
}