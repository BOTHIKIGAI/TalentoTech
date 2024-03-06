// Clase 04/03/2024

/* shift()
    Eliminar el primer elemento de un array y devuelve la longitud del arreglo
*/

const array = ['pc', 'rede', 'bases de datos', 'auditoria'];
array.shift();
console.log(array);

/* unshift()
    Arrega un valor a la primera posición
*/

const arreglo = ['pc', 'redes', 'base de datos', 'auditorioa'];
console.log(arreglo.unshift('Linux'));
console.log(arreglo);

/* reverse()
    Inverte el orden del arreglo, el primero pasa a ultmo y el ultimo a primero
*/

const arreglor = ['pc', 'redes', 'base de datos', 'auditorioa'];
console.log(arreglor.reverse());

/* splice()
    Cambia el contenido del arreglo, eliminando elementos y agregando unos nuevos
    (posicion a cambiar, (agregar = 0 o eliminar = 1), valor a agregar)
    Se puede agregar multiples elementos
*/

const arreglos = ['pc', 'redes', 'base de datos', 'auditorioa'];
arreglos.splice(1,1, 'base de datos'); // Remplaza redes por base de datos
// arreglos.splice(1,0, 'base de datos'); // Se agrega a la posicion 1
// arreglos.splice(1,1) // Eliminar un valor
console.log(arreglos);

/* lastIndexOf()
    Busco un elemento en un array, empieza desde el final hacia atras, devuelve su posición
*/

const arreglo1 = ['pc', 'redes', 'base de datos', 'auditorioa'];
console.log(arreglo1.lastIndexOf('auditoria'));

/* flat()
    Crea un nueva array con todos los elementos de sub-array, hasta la profundidad especifica.
    Crea un arreglo con en arreglo definido y si este tenia sub arreglos los elimina y
    deja el arreglo con todos los datos pero sin sub arreglos
*/

const arreglo2 = ['pc', 'redes', 'base de datos', 'auditorioa', ['C#', '.NET', 'Java']];
console.log(arreglo2.flat());

/* isArray()
    Determina si el array pasado es un arreglo
*/

console.log(Array.isArray(['pc', 'redes', 'base de datos', 'auditorioa', 'C#', '.NET', 'Java']));
console.log(Array.isArray({nombre: 'julian'}));
console.log(Array.isArray(arreglo2));

/* from()
    Crea una instancia a partir de un objeto iterable
*/
console.log(Array.from('gatodeunacasa'))
    // output -> (13) ['g', 'a', 't', 'o', 'd', 'e', 'u', 'n', 'a', 'c', 'a', 's', 'a']


/* findLast()
    Buscar un elemento de izquierda a derecha
*/

const array1 = [5,6,7,13,6,78,2,35,12];
const numero = array1.findLast(a => {
    console.log("n", a);
    return a === 35;
})
console.log(numero);

/* findIndex()

*/

const array2 = [5,6,7,13,6,78,2,35,12];
const numero2 = array2.findIndex(a => a === 35); 
console.log(numero2);

/* toReversed()
    Modificar un array dejarlo igual
*/

const arreglo3 = ['pc', 'redes', 'base de datos', 'auditorioa'];
console.log(arreglo3.toReversed()); // Organiza lo elementos de manera contraria pero no lo modifica
    // output ->  ['base de datos', 'redes', 'pc']
console.log(arreglo3); 
    // output ->  ['pc', 'redes', 'base de datos', 'auditorioa']

/* toSorted()
    No modifica el arreglo original y organiza los elementos
*/

const array3 = [5,6,7,13,6,78,2,35,12];
const numero3 = array3.toSorted((a,b) => a-b);
console.log(numero3);

/* splice */

const array4 = ['nombre', 'apellido', 'correo', 'direccion'];
const nombres = array4.toSpliced(1,1,'profesion', 'area');
console.log(array4);
console.log(nombres);