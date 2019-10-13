module.exports = function init(){
    gladys.param.getValue('BAOS_IP')
	.then(function(ip){
        var url = "http://"+ip+"/baos/StartIndicationSession"
	 	console.log("url StartIndicationSession = "+url)
        gladys.utils.request(url) //Start Session
        .then(function(result){
         	console.log(result.Data.SessionId)
         	var SessionId = result.Data.SessionId //get session id
         	var urlGetIndication = "http://"+ip+"/baos/GetIndication?SessionId="+SessionId+"&Timeout=30"
         	console.log("url GetIndication = "+url)
         	
         	gladys.utils.request(urlGetIndication) // Start listing
        	.then(function(response){
        		for (var i = response.Data.length - 1; i >= 0; i--) {   //set device state  		
        			console.log("Datapoint = "+response.Data[i].Datapoint)
        			console.log("Value = "+response.Data[i].Value)
        			var identifier = response.Data[i].Datapoint
        			var service = 'baos'
        			var state = {
    	    			value: response.Data[i].Value
	        		}
        			gladys.deviceState.createByDeviceTypeIdentifier(identifier, service, state)
         			}

        	})
         	.catch(console.log)

         })
         .catch(console.log)
     })
}
