const http=require('http')

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('this is the front page')
    }
    if(req.url==='/about'){
        res.end('This is the about page')
    }
    else{res.end(`
         <h1>Oops</h1>
         <p>We cant seem to find your page</p>
         <a href="/">back</a> 
         `
    )
}
    // res.write(`Hello welcome to the server`)
    // res.end()
})
server.listen(5000);