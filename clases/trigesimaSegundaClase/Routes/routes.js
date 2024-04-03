/* Librerias */
const express = require('express'); // Llamo a la libreria

/* Router de express */
const router = express.Router(); // Router permite definir rutas de manera modular y organizada

/* Controlador de Car */
const carControllers = require('../Controllers/carControllers'); // Controlador de Car

/* Rutas */
router.post('/add_car', carControllers.addCar); // Router con post ya que se va enviar datos cuando este en la 
                                                // ruta /add_car, llamando asi a carControllers.js al metodo 
                                                // addCar
router.get('/find_all', carControllers.findAll); // Router con get ya que se traera todos los datos encontrados en la base de datos
router.get('/find_car/:id', carControllers.findCar); // Router con get ya que traera los datos de un carro en base al id
router.delete('/delete_car/:id', carControllers.deleteCar); // Router delete quien resivira el id al para entregarselo 
                                                            // al controlador para la eliminación carro
router.patch('/update_car/:id', carControllers.updateCar); // Router patch quien resivira el id para pasarlo al controlador

module.exports = router; // Exportar las rutas