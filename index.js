module.exports = function(sails) {
	
	var exec = require('./lib/exec.js')
	var init = require('./lib/init.js')
	var setdatapointvalue = require('./lib/setdatapointvalue.js')
	var setdatapointonoff = require('./lib/setdatapointonoff.js')
	
	return {
		setdatapointonoff : setdatapointonoff,
		setdatapointvalue: setdatapointvalue,
		exec: exec

	};
};

