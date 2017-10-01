var mongoose = require('mongoose');

//Generar esquema
var generoSchema = mongoose.Schema({
    nombre:{
        type: String
    },
    _id:{
        type: String
    }
})

var Genero = module.exports = mongoose.model('Genero', generoSchema)
module.exports.getGenero = function(callback, limit){
    Genero.find(callback).limit(limit)
}