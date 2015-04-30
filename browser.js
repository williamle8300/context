/*

events
streams

url
path
querystring

*/

var matrixFun = require('./lib/matrix-fun');
console.log(document);
setTimeout(function(){
  document.body.innerHTML = JSON.stringify(matrixFun, null, 2);
}, 2000);


