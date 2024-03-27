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
        res.status(500).send('Was an Error to Add a Customer');
    }
}

// Find all
exports.findCustomer = async(req, res) => {
    try {
        const _Customer = await Customer.find();
        res.json(_Customer);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Was an Error to Find Customers');        
    }

}

// Find customer
exports.findCustomer = async(req, res) => {
    try {
        let _Customer = await Customer.findById(req.params.id);
        if(!_Customer) {
            res.status(404).json({msg:"Customer not fund"});
            return;
        }
        res.send(_Customer);

    }
    catch (error) {
        console.log(error);
        res.status(500).send('Was an Error to Find a Customer');
    }
}