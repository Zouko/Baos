module.exports = function setdatapointonoff(id,value){
	
	gladys.param.getValue('BAOS_IP')
	.then(function(ip){
         var url = "http://"+ip+"/baos/SetDatapointValue?Datapoint="+id+"&Format=DPT1&Length=1&Value="+value
         gladys.utils.request(url)
         .then(function(response){
         	console.log(response)
         })
         .catch(console.log)
     })

}
