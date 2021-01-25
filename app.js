/* Importaciones y Variables */
const express = require('express'); // requiero el modulo express
const app = express();
const port = 3030
const indexRouter = require('./routes/indexRoutes')
const autosRouter = require('./routes/autosRoutes')
const sucursalesRouter = require('./routes/sucursalesRoutes')
const adminRoutes = require('./routes/adminRoutes')

/* Configuraciones */

app.set('view engine', 'ejs'); //le digo a express que el motor de vistas es EJS
app.set('views', __dirname + '/views'); //configuro la carpeta donde van a estar guardadas las vistas

app.use(express.static(__dirname + '/public')); //configuro los recursos estaticos


/* Rutas */

app.use('/',indexRouter);
app.use('/autos', autosRouter);
app.use('/sucursales', sucursalesRouter);
app.use('/admin', adminRoutes)

/* Puerto */

app.listen(port, ()=> console.log("El servidor esta corriendo en el puerto " + port))

