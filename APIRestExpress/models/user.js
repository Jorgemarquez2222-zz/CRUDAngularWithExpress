var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    nombre : String,
    edad   : Number,
    genero : String,
    role: { type: Schema.ObjectId, ref: "Role" }
});

var User = module.exports = mongoose.model('User', userSchema)



module.exports.getUsers = function(callback, limit){
// User.findOne({ 'nombre': 'Jorge' }, 'nombre edad genero', function (err, person) {
//   if (err) return handleError(err);
//   console.log(person) // Space Ghost is a talk show host.
// })


    User.find(callback).limit(limit)



}
module.exports.getUserById = function(id, callback){
    User.findById(id,callback)
}
module.exports.addUser = function(user, callback){
    User.create(user,callback)
}
module.exports.updateUser = function(id, user, options, callback){
    var query = { _id: id }
    var update = {
        nombre: user.nombre,
        edad: user.edad,
        genero: user.genero
    }
    User.findOneAndUpdate(query, update, options, callback)
}
module.exports.removeUser = function(id, callback){
    var query = { _id: id }
    User.remove(query, callback)
}