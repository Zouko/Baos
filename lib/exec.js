var setdatapoint = require('./setdatapoint.js')

module.exports = function exec(params){
	var newState;
	var value =  params.deviceType.value
	console.log(value)
	var id = params.deviceType.deviceTypeIdentifier;
	console.log(params)
	if(value > 2)
		newState = value
	else if(value = 1)
		newState = true
	
	else newState = false

	setdatapoint(id, newState)
		
	}
