// Importando librerias
import express from 'express';
import {addCita, getAllCitas, getCitas, updateCita} from '../controllers/citasControllers.js';

// Instanciar routes
const router = express.Router();

router.get('/', getAllCitas); // esta ruta trae todas las citas, por eso el get 
router.get('/get_cita/:id', getCitas); // esta ruta trae una cita en especifico por eso el get y el eleento /:id para definir el
                                       // id de la ruta
router.post('/addCita', addCita); // añadir cita mediante el metodo post
router.post('/updateCita/:id', updateCita);

export default router;