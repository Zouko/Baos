
module.exports = function setdatapointvalue(id,value){
	var url = "http://192.168.1.200/baos/SetDatapointValue?Datapoint="+id+"&Format=DPT1&Length=1&Value="+value
	gladys.utils.request(url)
	console.log(url)
}
