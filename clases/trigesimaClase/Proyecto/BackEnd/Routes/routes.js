const express = require('express');
const router = express.Router();
const customerController = require('../Controllers/customerController');

router.post('/', customerController.addCustomer); // ✅
router.get('/', customerController.findCustomers); // ✅
router.get('/:id', customerController.findCustomer); // ✅
router.delete('/:id', customerController.deleteCustomer); // ✅
/* router.put('/:id', customerController.updateCustomer); // ✅ */
router.patch('/:id', customerController.updateCustomer); // ✅

module.exports = router;