const Car = require('../Models/Car'); // Traer el modelo

// Register
exports.addCar = async(req, res) => { // Exportar el metodo 
    try {
        let car; // Variable almacenar la instancia del modelo Car
        car = new Car(req.body); // El modelo revise la request o petición del body (json) que se le va a pasar
        await car.save(); // El await es para esperar que la operación de car.save se realize de manera asincrona
                          // car.save es la instancia del modelo Car con el request con la información del json y save permite
                          // el almacenamiento del archivo
        res.send(car); // res es la respuesta de esta opreación async y la cual se envia con send. Esta enviara car el cual es 
                       // la petición del json y asi almacenar la req
    } catch (error) {
        console.log(error);
        res.status(505).send('Was an Error to Add a Car')
    }
}

// FindAll 
exports.findAll = async(req, res) => { // Funcion de findAll que se exportara
    // Try catch para manejo de errores
    try {
        const cars = await Car.find(); // Definimos constante con el nombre cars porque traero todos los carros,
                                       // contiene un await para realizar la busqueda de manera asincrona. Esta llama al modelo
                                       // de Car y usa el metodo find para buscar todo los registros del modelo Car
        res.json(cars); // La res (respuesta) sera enviada en formato json para 
        return;
    } catch (error) {
        console.log(error);
        res.status(505).send('Was an Error to Add a find all cars');
    }
}

// Find a car
exports.findCar = async (req, res) => { 
    try {
        let car = await Car.findById(req.params.id); // Funcion para buscar el carro por el id que se le pase,
                                                     // se realiza de manera asincrona, invocando al modelo Car, usando 
                                                     // el metodo findById, pasandole como dato el dato de la request el cual
                                                     // es el id enviado desde la ruta                                                
        // Validacion, si no existe retornar un not found                                                     
        if (!car) {
            res.status(404).json({msg:"Not found customer"}); // Retorna una respuesta por medio de res, pasando un status con
                                                              // el 404 y enviando el mensaje
            return; // Retorna para que termine la función
        }
        res.json(car); // En caso de que si exista retornara los datos del car asociados a un id mediante un json
        return;
    } catch (error) {
        console.log(error);
        res.status(505).send('There was an erro finding the car');
    }
}

// Delete car
exports.deleteCar = async(req, res) => { // Nuevamente una funciónn asincrona la cual se exporta y resive
                                         // como parametro una request y respuesta (la cual se usa para responder)
    try {
        // Intenta eliminar el carro directamente. Si no existe, Mongoose no hará nada.
        await Car.deleteOne({ _id: req.params.id });

        // Verifica si el carro fue realmente eliminado.
        const car = await Car.findById(req.params.id);
        if (!car) {
            res.status(200).json({ msg: 'The car was deleted successfully.' });
        } else {
            // Si el carro no fue eliminado, podría ser un error.
            res.status(500).json({ msg: 'An error occurred while trying to delete the car.' });
        }
    } catch (error) {
        console.log(error);
        console.log('Was an error to delete a car')
    }
}

/* Update */
exports.updateCar = async(req, res) => {
    try {
        const updateCar = await Car.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if (!updateCar) {
            return res.status(404).send('Car was not found')
        }
        res.json(updateCar);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Was an error to delete a car'});
    }
}