module.exports = function init(){
    /*var SessionId = 34
    var url = "http://192.168.1.200/baos/GetDatapointValue?DatapointStart="+id+"&DatapointCount=1&Format=Default"
    var options = {
        identifier: id,
        service:"baos"
    }
    gladys.device.getByIdentifier(options)
    .then(function(result){
        console.log(result)
    })*/

    gladys.param.getValue('BAOS_IP')
	.then(function(ip){
        var url = "http://"+ip+"/baos/StartIndicationSession"
	 	console.log(url)
        gladys.utils.request(url)
        .then(function(Data){
         	console.log(Data.SessionId)
         })
         .catch(console.log)
     })
}
