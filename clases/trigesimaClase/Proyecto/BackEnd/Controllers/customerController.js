const Customer = require('../Models/Customer');

// Register
exports.addCustomer = async(req, res) => {
    try {
        let _Customer;
        _Customer = new Customer(req.body);
        await _Customer.save();
        res.send(_Customer);        
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Was an Error');
    }
}

// Find
exports.findCustomer = async(req, res) => {
    try {
        const _Customer = await Customer.find();
        res.json(_Customer);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Was an Error');
    }
}