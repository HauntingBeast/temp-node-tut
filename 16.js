const {readFile,writeFile}=require('fs').promises
// const util=require('util').promises 
// const readFilePromise =util.promisify(readFile)
// const writeFilePromise =util.promisify(writeFile)

const start=async()=>{
    try {
        const  first=await readFile("./content/first.txt",'utf8')
        const  second=await readFile("./content/second.txt",'utf8')
        await writeFile("./content/first.txt",` this is fucking awesome`,{flag:'a'})
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}
start()