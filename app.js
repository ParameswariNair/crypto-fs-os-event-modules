var fs = require('fs');

var r = fs.readFileSync('read.txt');
//console.log(r.toString());

//the content of write file is in variable r,and it is passed as the second parameter
fs.writeFileSync('write.txt', r);


//ASYNCHRONOUS WRITE & READ
// var fs = require('fs');

// fs.readFile('read.txt', function (err, data) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());
//     }
//fs.writeFile('write.txt',data.toString);
//});