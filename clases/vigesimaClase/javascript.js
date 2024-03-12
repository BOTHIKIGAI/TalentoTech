/* Arboles */
class Nodo {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class ArbolBinario {
    constructor() {
        this.root = null;
    }

    // metodo insertar
    insert(value) {
        let nNode = new Nodo(value);
        if (this.root === null) { // Se debe comparar si root es null, no nNode
            this.root = nNode;
            return this;
        }
        let actual = this.root;
        while (true) {
            if (value === actual.value) return undefined; // Evita duplicados
            if (value < actual.value) {
                if (actual.left === null) {
                    actual.left = nNode;
                    return this;
                }
                actual = actual.left;
            } else {
                if (actual.right === null) {
                    actual.right = nNode;
                    return this;
                }
                actual = actual.right;
            }
        }
    }

    // el metodo busqueda
    busqueda(value){
        if (this.root === null) return false;
        let actual = this.root;
        let iden = false;
        while (actual && !iden){
            if (value < actual.value){
                actual = actual.left;
            }
            else if (value > actual.value){
                actual = actual.right;
            }
            else {
                iden = true;
            }
        }
        if (!iden) return undefined;
        return actual;
    }

}

const arbol = new ArbolBinario();
arbol.insert('a');
arbol.insert('b');
arbol.insert('c');
console.log(arbol);
console.log(arbol.busqueda("c"));