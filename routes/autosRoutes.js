const express = require('express')
const router = express.Router() //requiero el metodo Router

const {autos, show, search} = require('../controllers/autosController'); //Maximo me enseño destructuring nivel Dios

router.get('/',autos)
router.get('/show/:id',show)
router.get('/search',search)

module.exports = router