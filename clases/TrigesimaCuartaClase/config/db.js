// Importación libreria para el uso de SQL
import { Sequelize } from "sequelize";

// Instanciar sequeliza
const conectarDB = new Sequelize('database_citas', 'root', '', {
    host:'localhost',
    dialect:'mysql'
});

// Exportar db para su uso en app.js
export default conectarDB;