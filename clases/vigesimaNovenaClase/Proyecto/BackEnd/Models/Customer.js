const Mongoose = require('mongoose');

const CustomerSchema = Mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    document: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cellphone: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    }
}, {version_Key: false});

module.exports = Mongoose.model('customers', CustomerSchema);