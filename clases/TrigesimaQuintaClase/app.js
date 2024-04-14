import express from 'express'; // Importando express para el manejo de rutas
import cors from 'cors'; // Importando cors para el manejo de información entre las rutas
import conectarDB from './config/db.js';
import citasRoutes from './routes/Routes_Citas.js'

const app = express(); // constante de express para su uso
app.use(express.json());
app.use(cors());
app.use('/citas', citasRoutes)

try {
    await conectarDB.authenticate();
    console.log('Coneccion a base de datos exitosa');
} catch (error) {
    console.error('Connección fallida:', error);
}

// Cuando se encuentre en la raiz a traves del puerto 5000 saltara enviara una respuesta
app.get('/', (req, res) => {
    res.send('Ruta raiz'); // (respuesta)
});

// Configuración de la app para que escuche el puerto y confirmar la conexión
app.listen(5000, () => {
    console.log('El servidor esta corriendo en el puerto 5000');
});