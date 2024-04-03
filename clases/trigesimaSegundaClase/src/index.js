/* Librerias */
const express = require('express'); // Llamo express para organización de rutas y logica de negocio
const connectDB = require('../Config/db'); // Función para la conexion a base de datos mongoDB
const cors = require('cors'); // Middleware acceder a recursos de un servidor

const app = express(); // Crea una instancia de la aplicación, para definir rutas
connectDB(); // Metodo proviente de config/db.js para la coneccion a mongo
app.use(cors()); // App que es instancia de express usa cors como middleware para acceder a los recursos

app.use(express.json()); // Transformar las solicitudes entrantes https a json
app.use('/api/colection_cars', require('../Routes/routes')); // Definimos la ruta principal y el modulo explica
                                                             // que tenemos o requerimos de Routes/routes
                                                             // dando a entender que existe una principal
                                                             // seguida de una rata "menor"

app.get('/', (req, res) => { // app (express con cors siendo middleware) cuando estan en la ruta inicial 
    res.send("Test 🟨")      // realiza un get el cual realiza una petición de traer y que da por
                             // respuesta por medio de send
});                                                        

app.listen(3000, () => { // app (express con cors siendo middleware) escuchaba el puerto 3000 y si esta conectado
    console.log('Server Linstening ✅')  // envia un mensaje
});