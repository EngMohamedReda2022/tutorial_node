const http =require("http")
const server=http.createServer((req,res)=>{
    if (req.url==="/") {
      return  res.end("Welcome to home page")
    }
    if (req.url==="/about"){
       return res.end("Welcome to about page ")
    }

    res.end(`
        <h1>Oops </h>
        <p>we can't seem to find the page you looking for </p>
        <a href="/">back home</a>
    `)

//ANOTHER WAY 
    // if (req.url=="/") {
    //     res.end(`
    //     <h1> this is home page</h1>
    //     `)
    // }
    // else if (req.url=="/about") {
    //     res.end(
    //         `<h1> this is about page</h1>`
    //     )
    // }
    // else {
    //     res.end(`
    //     <h1> you can't find the page you are looking for it </h1>
    //     <a href="/">back home</a>
    //     `)
    // }
})
server.listen(3000)