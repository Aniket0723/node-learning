// OS MODULE

const os = require('os')

//indo about currrent user
const user = os.userInfo()
console.log(user)

//method returs the system uptime in sec

console.log(`The System Uptime is ${os.uptime()} sec`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)