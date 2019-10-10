var setdatapoint = require('./setdatapoint.js')

module.exports = function exec(params){
	var newState;
	var id = params.deviceType.deviceTypeIdentifier;
	console.log(params)

		switch(params.deviceType.unit){
			case 'brightness':
				newState = params.state.value
				console.log(newState)
			break;
			case '1/0':
				if (params.state.value == 1)
					newState = true
				else newState = false
				console.log('1/0')
			break;
			
		}

	setdatapoint(id, newState)
		
	}

	
