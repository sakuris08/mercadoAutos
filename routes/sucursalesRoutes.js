const express = require('express')
const router = express.Router() //requiero el metodo Router

const sucursalesController = require('../controllers/sucursalesController');

router.get('/', sucursalesController.sucursales)

module.exports = router