module.exports = function init() {
  var boolean
  var id = 241
  var url = "http://192.168.1.200/baos/GetDatapointValue?DatapointStart="+id+"&DatapointCount=1&Format=Default"

  gladys.utils.request(url)
 .then((response) => 
 { 
     console.log(response);
     //console.log(reponde.0.value);

     }).catch((err) => {

         console.log(err);
         
         });
}
