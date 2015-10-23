

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require('./db.js');
var models = require("./models");

app.set('port', process.env.PORT || 8080);


/*
//add bogus router
models.Router().create({
  ip: "192.168.1.2",
  username: "root",
  password: "password"
}).then(function(router){
  console.log("created router: ", router);
})

*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/routers', function(req, res){
  res.json({routers : models.Router.findAll()});
})


app.use('/api', router);

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
console.log('Express server listening on port ' + server.address().port);
  });
});
