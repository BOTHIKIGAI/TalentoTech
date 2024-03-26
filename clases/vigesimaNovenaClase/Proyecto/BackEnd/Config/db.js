const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
    mongoose.connect(process.env.DB_MONGO)
    .then(()=>console.log('Connect to mongo ✅'))
    .catch((err)=>console.error(err));
}

module.exports = connectDB;