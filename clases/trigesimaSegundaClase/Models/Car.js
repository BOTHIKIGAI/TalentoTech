const mongoose = require('mongoose'); // Llamamos a la libreria mongoose

// Creación de un Schema, siendo un array con clave valor
const CustomerSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    model: {
        type: Number,
        require: true
    }
}, { version_key: false });

module.exports = mongoose.model('car', CustomerSchema); // Se define la manera mediante la cual se desea exportarlo

/* Estructura 

{
    "name": "toyota",
    "color": "blanco",
    "model":2024
}

*/

