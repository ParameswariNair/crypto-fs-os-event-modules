const os = require('os');

console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

var totalmemory = os.totalmem();
var freememory = os.freemem();
//console.log('Total Memory :'+ totalmemory);

//Template string 
//ES6 script
console.log(`Total Memory: ${totalmemory}`);
console.log(`Free Memory: ${freememory}`);

