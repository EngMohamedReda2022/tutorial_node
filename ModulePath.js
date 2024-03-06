const path =require("path")
//seprator what platform is used 
const sep=path.sep
console.log(sep)

//join filepath with seprator special platform
//if i add / it will remove it 
const filepath=path.join("content/","subfolder","test.txt")
console.log(filepath)

//know base name like test.txt from file paht
const basename=path.basename(filepath)
console.log(basename)
//test a thing 
const basename2=path.basename(`${__dirname}/content/subfolder/test.txt`)
console.log(basename2)

//get the absolute path 
const absolutePath = path.resolve(__dirname,"content","subfolder","test.txt")
console.log(absolutePath);