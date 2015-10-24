var models  = require('../models');
var express = require('express');
var router  = express.Router();

var async = require('async');


var wifi = require('../tasks/getWifiClient.js');

router.get('/', function(req, res) {
  models.User.findAll({
    include: [  ]
  }).then(function(users) {
    res.render('index', {
      title: 'Express',
      users: users
    });
  });
});

router.get('/wifi', function(req, res){
  retData = {};
  async.series([
    function(callback){
      wifi.get(['192.168.88.2'], function(address, data){
        retData[address] = data;
        console.log("done with execin callabck", data);
        callback(null, 'ok');

    });
  },

  function(err, results){
    res.render('wifi', {
      title: 'Wifi status',
      wifi: retData
    });
  }
  ]);



});

module.exports = router;
