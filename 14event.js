// console.log("First")
// setTimeout(() => {
//     console.log("second")
// }, 0);
// console.log("third")

const http= require('http')

const server=http.createServer((req,res)=>{
    console.log("request event")
    res.end(`Hello World`)
})

server.listen(5000,()=>{
    console.log(`listening to port 5000`)
})