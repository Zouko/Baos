var setdatapoint = require('./setdatapoint.js')

module.exports = function exec(params){
	var newState;
	var id = params.deviceType.deviceTypeIdentifier;
	console.log(params)
	if(params.deviceType.value >= 1 & params.deviceType.unit == 'brightness')
		newState = params.state.value
	else if(params.deviceType.value = 1)
		newState = true
	
	else newState = false

	setdatapoint(id, newState)
		
	}

	
