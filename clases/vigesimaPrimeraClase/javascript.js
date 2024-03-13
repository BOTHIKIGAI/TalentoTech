/* Arboles - Taller */
/* Crear función insertar */

/* Clase Nodo */
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}
   
class ArbolBinario {
    constructor() {
      this.raiz = null;
    }

    /* eliminar */

    insertar(valor) {
        const nuevoNodo = new Nodo(valor);
     
        if (this.raiz === null) {
          this.raiz = nuevoNodo;
        } else {
          this.insertarNodo(this.raiz, nuevoNodo);
        }
    }
     
    insertarNodo(nodo, nuevoNodo) {
        if (nuevoNodo.valor < nodo.valor) {
            if (nodo.izquierdo === null) {
                nodo.izquierdo = nuevoNodo;
            } else {
                this.insertarNodo(nodo.izquierdo, nuevoNodo);
            }
        } else {
            if (nodo.derecho === null) {
                nodo.derecho = nuevoNodo;
            } else {
                this.insertarNodo(nodo.derecho, nuevoNodo);
            }
        }
    }

    /* buscar */

    buscar(valor){
        return this.buscarNodo(this.raiz, valor);
    }

    buscarNodo(nodo, valor){
        if (nodo === null || nodo.valor === valor){
            return nodo;
        }
        else if (valor < nodo.valor) {
            return this.buscarNodo(nodo.izquierdo, valor);
        }
        else {
            return this.buscarNodo(nodo.derecho, valor);
        }
    }

    /* eliminar */

    eliminar(valor){
        this.raiz = this.eliminarNodo(this.raiz, valor);
    }

    eliminarNodo(nodo, valor) {
        if (nodo === null) { // si no tiene valores
            return null;
        }
        else if (valor < nodo.valor){ // examina si el valor es menor que el nodo valor 
            nodo.izquierdo = this.eliminarNodo(nodo.izquierdo, valor); // 
            return nodo;
        }
        else if (valor >  nodo.valor){ // examina si el valor es mayor que el nodo valor
            nodo.derecho = this.eliminarNodo(nodo.derecho, valor);
            return nodo;
        }
        else {
            if (nodo.izquierdo === null && nodo.derecho === null) {
                return null;
            }
            else if (nodo.izquierdo === null) {
                return nodo.derecho;
            }
            else if (nodo.derecho === null) {
                return nodo.izquierdo;
            }
            else {
                const sucesor = this.encontrarSucesor(nodo.derecho);
                nodo.valor  = sucesor.valor;
                nodo.derecho = this.eliminarNodo(nodo.derecho, sucesor.valor);
                return nodo;
            }
        }
    }

    encontrarSucesor(nodo) {
        let sucesor = nodo;
        while (sucesor.izquierdo != null) {
            sucesor = sucesor.izquierdo;
        }
        return sucesor;
    }

    recorridoEnOrden() {
        this.recorrerEnOrden(this.raiz);
      }
     
      recorrerEnOrden(nodo) {
        if (nodo !== null) {
          this.recorrerEnOrden(nodo.izquierdo);
          console.log(nodo.valor);
          this.recorrerEnOrden(nodo.derecho);
        }
      }

}

/* Instanciar */
let arbol = new ArbolBinario();
arbol.insertar("a");
arbol.insertar("b");
arbol.insertar("c");
console.log(arbol);
let buscar  = arbol.buscar("b");
console.log(buscar);
console.log(arbol.recorridoEnOrden());

