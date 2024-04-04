// Importar la conexión a base de datos
import conectarDB from "../config/db.js";

// Importar datatype para traer cada uno de los datos
import { DataTypes } from "sequelize";

const Citas = conectarDB.define('citas', {
    nombre_medico:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    especialidad:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    duracion:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    updatedAt:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Citas;