module.exports = function init(){
    var id = 241
    var url = "http://192.168.1.200/baos/GetDatapointValue?DatapointStart="+id+"&DatapointCount=1&Format=Default"
    var options = {
        identifier: id,
        service:"baos"
    }
    gladys.device.getByIdentifier(options)
    .then((device){
        console.log(device)
    })
}                      
