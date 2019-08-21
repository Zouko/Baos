module.exports = function init() {
  var boolean
  var id = 241
  var url = "http://192.168.1.200/baos/GetDatapointValue?DatapointStart="+id+"&DatapointCount=1&Format=Raw"
  var json = gladys.utils.request(url)
  console.log(json)
}
