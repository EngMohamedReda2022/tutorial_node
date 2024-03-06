const os=require("os")
//info about user
const user=os.userInfo();
console.log(user)
//the uptime system method
const uptime=os.uptime();
console.log(`the uptime system is: ${uptime} secondes`)
//create object about data about os
const CurrentOs= {
    name:    os.type(),
    release: os.release(),
    totalme: os.totalmem(),
    freemem: os.freemem(),
}
console.log(CurrentOs)