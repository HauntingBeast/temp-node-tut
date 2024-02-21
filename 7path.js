const path=require("path")
console.log(path.sep)

const folder=path.join("/folder","subfolder","test.txt")
console.log(folder)

const base=path.basename(folder)
console.log(base)

const absolute=path.resolve(__dirname,"folder","subfolder","test.txt")
console.log(absolute) 