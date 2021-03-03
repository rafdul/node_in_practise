const os = require('os');
// console.log(os);

console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('User:', os.userInfo());
console.log('Version:', os.version());
console.log('Totalmem:', os.totalmem());
console.log('TMPdir:', os.tmpdir());

