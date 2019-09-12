module.exports = function init(){
    /*var id = 34
    var url = "http://192.168.1.200/baos/GetDatapointValue?DatapointStart="+id+"&DatapointCount=1&Format=Default"
    var options = {
        identifier: id,
        service:"baos"
    }
    gladys.device.getByIdentifier(options)
    .then(function(result){
        console.log(result)
    })
}  */                    
var options = {
     service: 'baos'
}
gladys.device.getByService(options)
     .then(function(device){
         console.log("hey")
     })
}
