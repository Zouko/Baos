var setdatapointvalue = require('./setdatapointvalue.js')
var setdatapointonoff = require('./setdatapointonoff.js')

module.exports = function exec(params){
	var newState = params.state.value;
	var id = params.deviceType.deviceTypeIdentifier;
	console.log(params)

		switch(params.deviceType.unit){
			case 'brightness':
				setdatapointvalue(id, newState)
				console.log('brightness')
			break;
			case '1/0':
				setdatapointonoff(id, newState)
				console.log('1/0')
			break;
			
		}
	}

	
