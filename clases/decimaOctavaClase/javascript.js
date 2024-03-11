/* Listas enlazadas */

class Node {
    _next = null;
    _value = null;
    constructor(value){
        this._value = value;
    }
}

class ListaEnlazada {
    _first = null;
    _last = null;
    push = (value) => { // add data
        const data = new Node(value);
        if(!this._first) {
            this._first = data;
            this._last = data;
            return;
        }
        this._last._next = data;
        this._last = data;
    }
    countData = () => { // count data
        let _i = 0; //
        let data = this._first;
        if (!data) return 0;
        else _i = 1;
        while(data._next){
            data = data._next;
            _i++;
        }
        return _i;
    }
    findData = (value) => { // find data
        let data = this._first;
        if (!data) return null;
        while(data){
            if (data._value === value){
                return data;
            }
            data = data._next;
        }
        return null;
    }
}

const list = new ListaEnlazada();
list.push("hola");
list.push("como");
list.push("estas");
console.log(list);
console.log(list.countData());
console.log(list.findData("como"));

/* Ejercicio de la plataforma compartida */

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    insertAtHead(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (!this.head) {
          this.head = newNode;
        }
        if (this.tail) {
          this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    deleteFromHead() {
        if (!this.head) {
          return;
        }
        this.head = this.head.next;
    }

    deleteFromTail() {
        if (!this.tail) {
          return;
        }
        if (!this.head) {
          this.head = null;
          this.tail = null;
          return;
        }
        let current = this.head;
        while (current.next !== this.tail) {
          current = current.next;
        }
        current.next = null;
        this.tail = current;
    }

    search(data) {
        let current = this.head;
        while (current) {
          if (current.data === data) {
            return current;
          }
          current = current.next;
        }
        return null;
    }

    traverse() {
        let current = this.head;
        while (current) {
          console.log(current.data);
          current = current.next;
        }
    }
}

let listaEnlazada = new LinkedList();
listaEnlazada.insertAtHead("Hola en la cabeza");
listaEnlazada.insertAtTail("Hola en la cola");
listaEnlazada.traverse();