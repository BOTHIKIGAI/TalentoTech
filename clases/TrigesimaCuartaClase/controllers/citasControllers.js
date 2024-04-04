// Importación del modelo
import Citas from '../models/Citas.js';

// Metodos

// findAll
export const getCitas = async (req, res) => { // exportar en constante la función get citas que es asincrona y
                                              // tiene como parametro request y respuesta
    try {
        const citas = await Citas.findAll(); // Instanciar el modelo y llamamos el metodo para encontrar todos los registros
        res.json(citas)
    } catch (error) {
        res.json({msg: error.message })
    }
}
