// Importando librerias
import express from 'express';
import {getCitas} from '../controllers/citasControllers.js';

// Instanciar routes
const router = express.Router();

router.get('/', getCitas);

export default router;