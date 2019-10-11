module.exports = function(sails) {
	
	var exec = require('./lib/exec.js')
	var init = require('./lib/init.js')
	var command = require('.lib/command.js')
	var setdatapoint = require('./lib/setdatapoint.js')

	
	return {
		setdatapoint : setdatapoint,
		exec: exec,
		init: init,
		command: command

	};
};

