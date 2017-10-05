var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
User = require('./models/user')
Role = require('./models/role')
var cors = require('cors');

app.use(bodyParser.json())
app.use(cors())

mongoose.Promise = global.Promise;
// mongodb://userapirestexpress:1234@ds157624.mlab.com:57624/apirestexpress
mongoose.connect('mongodb://userApiRestExpress:1234@ds157624.mlab.com:57624/apirestexpress',{ useMongoClient: true, promiseLibrary: global.Promise }, function(err, res) {
    if (err) throw err;
    console.log('Connected to DataBase');
});

app.get('/users', function(req, res){
  User.getUsers(function (err, users) {
        if (err) {
          console.log(err);
        } else {
            res.json(users)
        }
     });
});

app.get('/users/role', function(req, res){
    // User.find({}, function(err, users) {
    // 	Role.populate(users, {path: "role"},function(err, roles){
    //     	res.json(roles);
    //     }); 
    // });
    Role.
    find({nivel : "1"}).
    populate({path: 'users' }).
    exec(function (err, role) {
      if (err) return handleError(err);
      // console.log( role[0].users);
      role.forEach(function(element) {
        console.log(element.users.nombre +"  "+element.users.edad + "  "+element.users.genero  );
    });
      // prints "The author is Ian Fleming"
    });
})
  // User.find({}, function(err, users) {
  //   	Role.populate(users, {path: "role"},function(err, roles){
  //       	res.json(roles);
  //       }); 
  //   }).where({nombre: "Carlos"});


app.get('/users/:_id', function(req, res){
  User.getUserById(req.params._id,function (err, user) {
        if (err) {
          console.log(err);
        } else {
            res.json(user)
        }
      });
});

app.post('/users', function(req, res){
  var user = req.body;
  User.addUser(user, function (err, user) {
        if (err) {
          console.log(err);
        } else {
            res.json(user)
        }
      });
});

app.put('/users/:_id', function(req, res){
  var id = req.params._id;
  var user = req.body;
  User.updateUser(id, user, {}, function (err, user) {
        if (err) {
          console.log(err);
        } else {
            res.json(user)
        }
      });
});

app.delete('/users/:_id', function(req, res){
  var id = req.params._id;
  User.removeUser(id, function (err, user) {
        if (err) {
          console.log(err);
        } else {
            res.json(user)
        }
      });
});

app.listen(5000);
console.log('Servidor Express escuchando en el puerto 5000')