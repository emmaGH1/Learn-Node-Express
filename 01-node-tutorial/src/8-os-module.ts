import os from 'os'

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds 
console.log(`The System Uptime is ${os.uptime()} seconds`)

// system info
const { type, release, totalmem, freemem } = os
const currentOS = {
    name: type(),
    release: release(),
    totalmem: totalmem(),
    freemem: freemem()
}
console.log(currentOS)