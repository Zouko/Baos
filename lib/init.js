module.exports = function init() {
  var boolean
  var id = 241
  var url = "http://192.168.1.200/baos/GetDatapointValue?DatapointStart="+id+"&DatapointCount=1&Format=Raw"

  gladys.utils.request(url)
 .then((response) => 
 { 
     console.log(response);

     }).catch((err) => {

         console.log(err);
         
         });
}
