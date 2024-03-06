const fs=require("fs")
//syncronusly ==running in the same time
//read file 
console.log("start task")
const firstRead=fs.readFileSync("./content/first.txt","utf8")
const secondRead=fs.readFileSync("./content/second.txt","utf8")
console.log(firstRead)
console.log(secondRead)

//write file and overwit
const writeOverwirte=fs.writeFileSync("./content/writeFile.txt",`the result is ${firstRead}`) 

//write file with append not overwrite
const writeAppend=fs.writeFileSync(
    "./content/wirteAppend.txt",
    "this is append\n",
    {flag: "a"}//not overwrite
    )