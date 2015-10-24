/*
var control = require('control'),
    task = control.task;

task('mycluster', 'Config for my cluster', function () {
    var config = {
        '192.168.88.2': {
            user: 'root'
        },
    };
    return control.controllers(config);
});


task('date', 'Get date', function (controller) {
    controller.ssh('date');
});
control.begin();
*/



module.exports.get = function(ipAddresses, cb){

  function callBack(){
        //console.log("got response:", controller.address);
  }

  function callBackError(ee){
        //console.log("got Error:", controller.address);
  }

  var control = require('control'),
  shared = Object.create(control.controller),
  i,l, controller, controllers;

  shared.user = 'root';
  shared.stdout.on('data', function(data){
    console.log('data received: ', data.toString());
    cb(controller.address, data.toString());
  });

  controllers = control.controllers(ipAddresses, shared);

  for (i=0, l = controllers.length; i< l; i+= 1){
    controller=controllers[i];

    controller.ssh('iw dev wlan1 station dump',callBack ,callBackError);

    }

};


/*
returned data:
data received:  Station 7c:XX:XX:XX:XX:XX (on wlan1)
	inactive time:	0 ms
	rx bytes:	18541488
	rx packets:	135000
	tx bytes:	240769250
	tx packets:	193982
	tx retries:	23316
	tx failed:	2
	signal:  	-53 [-61, -57, -57] dBm
	signal avg:	-53 [-60, -57, -57] dBm
	tx bitrate:	144.4 MBit/s MCS 15 short GI
	rx bitrate:	130.0 MBit/s MCS 15
	expected throughput:	47.76Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	long
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no


*/
