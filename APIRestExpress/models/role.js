var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
    nombre : String,
    nivel: String,
    users :{  type: Schema.ObjectId, ref: "User" }
});

var Role = module.exports = mongoose.model('Role', roleSchema)
