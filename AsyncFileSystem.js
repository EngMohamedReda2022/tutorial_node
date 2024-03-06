const fs=require("fs")
//asyncrhnouslly == not runnign in the same time
//TASK 
//READ FIRST FILE
//READ SECOND FILE 
//WRITE NEW FILE THE FIRST AND SECOND 
fs.readFile("./content/first.txt","utf8",(err,result)=> {
if (err) {
    console.log(err)
}
const first=result
fs.readFile("./content/second.txt","utf8",(err,result)=>{
    if (err) {
        console.log(err)
    }
    const second=result
    fs.writeFile("./content/FirstAndSecond.txt",`this is the first file and the second file content ${first,second}`,(err,result)=>{
        if (err) {
            console.log(err)
        }
    })
})
})