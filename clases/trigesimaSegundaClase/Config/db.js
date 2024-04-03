const mongose = require('mongoose'); // Llamamos a la libreria
require('dotenv').config(); // Vinculación a lo configurado en dotenv

// Función para conectar a mongoDB
const connectDB = () => {
    mongose.connect(process.env.DB_MONGO) // La libreria mongose busca la coneccion mediante el metodo connect 
                                          // segido de aquello llama al archivo env y entra en la clave DB_MONGO
    .then(()=>console.log('Connect to mongo ✅')) // Si todo sale bien por consola mostrara un mensaje por consola de conectado a mongo
    .catch((err)=>console.log(err)); // Si algo facha lanza error de conexión
}

module.exports = connectDB; // Exportar como modulo a otro archivos que llamen al db.js la función connectDB