module.exports = function setdatapoint(id,value){
	var boolean
	if (value == 1)
		boolean = true
	else boolean = false
	
	gladys.param.getValue('BAOS_IP')
	.then(function(ip){
         var url = "http://"+ip+"/baos/SetDatapointValue?Datapoint="+id+"&Format=DPT1&Length=1&Value="+boolean
	 console.log(url)
         gladys.utils.request(url)
         .then(function(response){
         	console.log(response)
         })
         .catch(console.log)
     })

}
	
