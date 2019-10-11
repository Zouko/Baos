var setdatapoint = require('./setdatapoint.js')

module.exports = function exec(params){
	var newState
	var value =  params.state.value
	var id = params.deviceType.deviceTypeIdentifier;
	console.log("value = "+value)
	console.log("id = "+id)

	if(value > 1)
		newState = value
	else if(value == 1)
		newState = true
	
	else newState = false

	setdatapoint(id, newState)
		
	}
