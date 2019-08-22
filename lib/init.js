module.exports = function init() {
  var boolean
  var id = 241
  var url = "http://192.168.1.200/baos/GetDatapointValue?DatapointStart="+id+"&DatapointCount=1&Format=Default"
  var obj =  response
  var options = {
    identifier: id,
    service: 'baos'
  }

  gladys.utils.request(url)
  .then((response){  
    var obj =  response
    console.log(response);    
    console.log(obj.Data[0].Value);
  })

  gladys.device.getByIdentifier(options)
  .then(function(device){
    console.log(device)
  })

  gladys.deviceType.exec({
    devicetype: 34,
    value: obj.Data[0].Value
  })
}
