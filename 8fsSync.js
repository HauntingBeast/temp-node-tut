const {readFileSync, writeFileSync}= require("fs")
// const r=require("fs")
// console.log(r)
console.log("starting with the task ")
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync("./content/second.txt",'utf8')
console.log(first,second)
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second} `)
writeFileSync('./content/result-sync.txt','HELLO ',{flag:'a'})

console.log("done with this task")
console.log("startinf with a new task")