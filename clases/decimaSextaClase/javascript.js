/* 
Hacer un arreglo que tenga 5 objetos, van a llevar la siguiente estructura de datos

Arreglo va a llevar ->
- Nombre
- Apellido
- Edad
- Correo
- Area
*/

let programadores = [
    {
        nombre: "Juan Esteban" ,
        apellido: "Cajiao Madero" ,
        edad: 20,
        correo: 'juanes@gmail.com',
        area: 'Back-end',
    },
    {
        nombre: "Milan" ,
        apellido: "Morera" ,
        edad: 21,
        correo: 'milan@gmail.com',
        area: 'Server',
    },
    {
        nombre: "Niyi" ,
        apellido: "Morera" ,
        edad: 20,
        correo: 'Nym@gmail.com',
        area: 'Front-end',
    }
];


// for

for (let programador of programadores) {
    console.log("Nombre: " + programador.nombre);
    console.log("Apellido: " + programador.apellido);
    console.log("Edad: " + programador.edad);
    console.log("Correo: " + programador.correo);
    console.log("Área: " + programador.area);
    console.log("------------------------");
}

// forEach
programadores.forEach(function(programador) {
    console.log("Nombre: " + programador.nombre);
    console.log("Apellido: " + programador.apellido);
    console.log("Edad: " + programador.edad);
    console.log("Correo: " + programador.correo);
    console.log("Área: " + programador.area);
    console.log("-----------------------");
});

// forEach con funcion flecha

progrmadores.forEach(programador => {
    console.log("Nombre: " + programador.nombre);
    console.log("Apellido: " + programador.apellido);
    console.log("Edad: " + programador.edad);
    console.log("Correo: " + programador.correo);
    console.log("Área: " + programador.area);
    console.log("-----------------------");
});

// foreach concatenando
progrmadores.forEach (progrmador => {
    console.log('Nombre ' + progrmador.nombre + ' ' + progrmador.apellido 
                + ' trabaja en el area de ' + progrmador.area);
    console.log("-----------------------");
})

// Almacenar todo lo que se recorrio en un arreglo vacio
let programadorInfo = [];
programadores.forEach(programador => {
    programadorInfo.push(programador);
});
console.log(programadorInfo);

programadorInfo = [];

programadores.forEach(programador => {
    programadorInfo.push(programador.nombre);
    programadorInfo.push(programador.apellido);
    programadorInfo.push(programador.correo);
    programadorInfo.push(programador.edad);
    programadorInfo.push(programador.area);

});

console.log(programadorInfo);

/* MAP */
let programadoresDuplicado = programadores.map(function(programador){
    return programador;
});

console.log(programadoresDuplicado);