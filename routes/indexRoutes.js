const express = require('express')
const router = express.Router() //requiero el metodo Router

const indexController = require('../controllers/indexController');

router.get('/',indexController.index)

module.exports = router