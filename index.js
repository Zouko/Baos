module.exports = function(sails) {
	
	var setdatapointvalue = require('./lib/setdatapointvalue.js')
	var exec = require('./lib/exec.js')
	var setdatapointonoff = require('./lib/setdatapointonoff.js')
	return {
		setdatapointonoff : setdatapointonoff,
		setdatapointvalue: setdatapointvalue,
		exec: exec

	};
};

