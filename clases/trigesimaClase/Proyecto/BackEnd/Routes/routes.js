const express = require('express');
const router = express.Router();
const customerController = require('../Controllers/customerController');

router.post('/', customerController.addCustomer);
router.post('/', customerController.findCustomer);
router.post('/:id', customerController.findCustomer);

module.exports = router;