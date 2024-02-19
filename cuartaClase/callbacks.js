/* // Funcion con callback 

function solicitudServidor(consulta, callback) {
    setTimeout(function() {
        let respuesta = consulta + "ejecutando"; // 
        callback(respuesta);
    }, 5000);
}

function obtenerResultado(resultados) {
    console.log("La respuesta del servidor: " + resultados);
}

solicitudServidor("el servidor esta", obtenerResultado); */

// { EJEMPLO 2 }

/* function modificarArreglo(array, callback) {
    console.log("Cantidad de elementos del array " + array.length);
    array.push("red");
    setTimeout(function(){callback()}, 3000);
}

const partes = ["conexion", "caidas", "servidor"];

modificarArreglo(partes, function(){
    console.log(`se modifico el arreglo, ahora tiene ${partes.length} elementos`);
    console.log(partes);
}); */

// { EJEMPLO 3 }

/* const peliculasAccion = [
    {
        nombre: "Duro de matar",
        year: 2000
    },
    {
        nombre: "Interestelar",
        year: 2015
    },
    {
        nombre: "Frankstein",
        year: 1990
    }
]

const vistaPeliculas = peliculasAccion.filter(value => value.year >= 2000);
console.log(vistaPeliculas); */

// { EJEMPLO 3 }

/* function resolveAfter25Secoonds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter25Secoonds();
    console.log(result);
}

asyncCall();  */


