module.exports = function init(){
    gladys.param.getValue('BAOS_IP')
	.then(function(ip){
        var url = "http://"+ip+"/baos/StartIndicationSession"
	 	console.log("url StartIndicationSession = "+url)
        gladys.utils.request(url)
        .then(function(result){
         	console.log(result.Data.SessionId)
         	var SessionId = result.Data.SessionId
         	var urlGetIndication = "http://"+ip+"/baos/GetIndication?SessionId="+SessionId+"&Timeout=30"
         	console.log("url GetIndication = "+url)
         	
         	gladys.utils.request(urlGetIndication)
        	.then(function(response){
        		console.log("Datapoint = "+response.Data[0].Datapoint)
        		console.log("Value = "+response.Data[0].Value)
        		var identifier = response.Data[0].Datapoint
        		var service = 'baos'
        		var state = {
        			value: response.Data[0].Value
        		}
        		gladys.deviceState.createByDeviceTypeIdentifier(identifier, service, state)
     			.then(function(state){
        			console.log("deviceState created !") 
     			})
     			.catch(function(err){
         			console.log("erreur deviceState")
     			});

        	})
         	.catch(console.log)

         })
         .catch(console.log)
     })
}
