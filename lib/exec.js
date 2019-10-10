var setdatapoint = require('./setdatapoint.js')

module.exports = function exec(params){
	var newState;
	var value =  params.deviceType.value
	console.log(value)
	var id = params.deviceType.deviceTypeIdentifier;
	console.log(params)
	if(value == 1)
		newState = true
	else if(value < 1)
		newState = value
	else newState = false

	setdatapoint(id, newState)
		
	}
