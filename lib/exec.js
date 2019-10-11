var setdatapoint = require('./setdatapoint.js')

module.exports = function exec(params){
	var newState =  params.state.value
	var id = params.deviceType.deviceTypeIdentifier;
	
	console.log("value = "+value)
	console.log("id = "+id)

	setdatapoint(id, newState)
		
	}
