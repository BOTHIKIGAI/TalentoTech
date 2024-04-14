// Importación del modelo
import { where } from 'sequelize';
import Citas from '../models/Citas.js';

// Metodos

// findAll
export const getAllCitas = async (req, res) => { // exportar en constante la función get citas que es asincrona y
    // tiene como parametro request y respuesta
    try {
        const citas = await Citas.findAll(); // Instanciar el modelo y llamamos el metodo para encontrar todos los registros
        res.json(citas)
    } catch (error) {
        res.json({ msg: error.message })
    }
}

// Mostrar citas
export const getCitas = async (req, res) => { // exportar la función siendo constante para evitar su modificación y async
    // esta resive un request que es la petición y da un res que es respuesta
    try {
        const cita = await Citas.findAll({ // manera para buscar una cita en especifica 
            where: { id: req.params.id }
        });
        // COndicional de busqueda
        if (cita.length > 0) { // Si la longitud de cita es mayor a 0 significa que encontro información a ese id
            res.json(cita); // Devuelve la información en un json sobre la cita que tiene ese id
        }
        else {
            res.json({ msg: "No se encontró ninguna cita con el ID proporcionado" });
            // Si la longitud no es mayor a 0 significa que no encontro data
            // devolviendo asi un mensaje
        }
    } catch (error) {
        res.json({ msg: error.message })
    }
};

// Registrar una cita
export const addCita = async (req, res) => {
    try {
        await Citas.create(req.body);
        res.json({ msg: 'Cita creada exitosamente' });
    } catch (error) {
        res.json({ msg: error.message });
    }
}

// Update cita
export const updateCita = async (req, res) => {
    try {
        await Citas.update(req.body, { where: { id: req.params.id } });
        res.json({ msg: "Update Succesfull" });
    } catch (error) {
        res.json({ msg: error.message });
    }
}