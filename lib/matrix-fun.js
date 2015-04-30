// https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=learn%20matrix%20math&es_th=1
// something involving manipulating matrixes/ndarrays: 3D

var zeros = require("zeros")
var ops = require("ndarray-ops")
var gemm = require("ndgemm")

//Create 3 random matrices
var a = zeros([300, 400]) // a is 300 x 400
// var b = zeros([400, 500]) // b is 400 x 500
// var c = zeros([300, 500]) // c is 300 x 500
//
module.exports = ops.random((a));
// console.log(ops.random(b));
// console.log(ops.random(c));
 
//Set c = a * b 
// gemm(c, a, b);
