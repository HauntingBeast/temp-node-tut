const os=require('os')
const data=os.userInfo()
console.log(data)
console.log(`The system is uptime is ${os.uptime()} seconds`)
const current_os={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMEm: os.freemem(),  
}
console.log(current_os)