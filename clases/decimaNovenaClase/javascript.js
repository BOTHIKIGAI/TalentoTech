// Creamos una clase para cada nodo en una lista

class Node {
    // este nodo tiene 2 propiedades, el valor y el puntero que indique el nodo que sigue
    constructor(val){
        this.val = val;
        this.next = null;
    }

}

// Creamos la clase principal linkedList
class linkedList {
    /* va llevar dentro del constructor en este caso 3 propiedades, el encabezado
    la cola y tamaño */
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Metodo insertar en la cabecera, toma el valor de parametro y lo asigna al final
    push(val){
        const node = new Node(val);
        if (!this.head){
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this; // 
    }

    pop(val){
        if(!this.head) return endefined;
        let current = this.head;
        let nTail = current;

        while (current.next){
            nTail = current;
            current = current.next;
        }

        this.tail = nTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // metodo que nos coloque un elemento actual a la cabecera
    
}

const lista = new linkedList();
lista.push("a");
lista.push("b");
console.log(lista);