var fs = require('fs');
var imdata = fs.readFileSync(__dirname + '/image.png', 'base64');
var img = document.createElement('img');

img.setAttribute('src', 'data:image/png;base64,' + imdata);
document.body.appendChild(img);

