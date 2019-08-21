module.exports = function init() {
  var boolean
  var id = 241
  var url = "http://192.168.1.200/baos/GetDatapointValue?DatapointStart="+id+"&DatapointCount=1&Format=Default"

  gladys.utils.request(url)
 .then((response) => 
 { 
     console.log(response);
     jsonData = { Data:[ { Datapoint: 241, Format: 'DPT5', Length: 1, State: 16, Value: 0 } ],Result: true,Service: 'GetDatapointValue' };
     var obj = JSON.parse(jsonData);
    
     console.log(obj.Data[0].Value);

     }).catch((err) => {

         console.log(err);
         
         });
}
