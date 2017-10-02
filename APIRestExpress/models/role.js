var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
    nombre : String,
    nivel: String
});

var Role = module.exports = mongoose.model('Role', roleSchema)
