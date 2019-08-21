module.exports = function setdatapointonoff(id,value){
	var boolean
	if (value == 1)
		boolean = true
	else boolean = false
	var url = "http://192.168.1.200/baos/SetDatapointValue?Datapoint="+id+"&Format=DPT1&Length=1&Value="+boolean
	gladys.utils.request(url)
	console.log(url)
}
