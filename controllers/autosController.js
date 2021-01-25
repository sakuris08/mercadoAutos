const autos = require('../data/autos')


module.exports={
    autos:(req,res) =>{
        res.render('autos',{
            title: "Automotores",
            autos});
        
    },
    show:(req,res) =>{
        let auto = autos.find(auto =>{
            return auto.id == req.params.id
        })
        res.render('detalles',{
            title:"Detalle",
            auto
        })
    },
    search:(req,res) =>{
        const buscar = req.query.buscar;

        const resultado = autos.filter(auto => {
            return auto.modelo.includes(buscar)
        })
        res.render('autos',{
            title: "Resultado de la busqueda",
            autos : resultado
        })
    }
}