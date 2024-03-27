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
exports.findCustomers = async(req, res) => {
    try {
        // Find all
        const _Customer = await Customer.find();
        res.json(_Customer);
        return;
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Was an error to find customers');        
    }
}

// Find customer
exports.findCustomer = async(req, res) => {
    try {
        // Find custer
        let _Customer = await Customer.findById(req.params.id);

        // Validate existence in DB
        if(!_Customer) {
            res.status(404).json({msg:"Customer not found"});
            return;
        }
        
        // Find customer
        res.json(_Customer); 
        return;
    } catch (error) {  
        console.log(error);
        res.status(500).send('There was an error finding the customer'); 
    }
}


// Delete Customer
exports.deleteCustomer = async(req, res) => {
    try {
        // Find custer
        let _Customer = await Customer.findById(req.params.id);

        // Validate existence in DB
        if(!_Customer) {
            res.status(404).json({msg:"Customer not fund"});
            return;
        }

        // Delete customer
        await Customer.deleteOne({_id: req.params.id});
        res.json({msg:"The was deleted"});
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send('Was an error to delete a customer');
    }
}

exports.updateCustomer = async(req, res) => {
    try {
        // Data Custoer
        const {name, surname, document, email, cellphone, address} = req.body;
        // Find Customer
        let _Customer = await Customer.findById(req.params.id);
        // Validate existence in DB
        if(!_Customer) {
            res.status(404).json({msg:"Customer not fund"})
        }
        else {
            // Change value
            _Customer.name = name;
            _Customer.surname = surname;
            _Customer.document = document;
            _Customer.email = email;
            _Customer.cellphone = cellphone;
            _Customer.address = address;

            // Update data customer
            _Customer = await Customer.findOneAndUpdate({_id: req.params.id}, _Customer,{new:true});
            res.json(_Customer);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Was an error to update a customer');
    }
}