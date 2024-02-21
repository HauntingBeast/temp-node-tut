//npm - gobal command cines with node
// npm --version

// local dependency - use ut only in this particular project
// npm install <packagename>

// global dependency -use it in any project
// npm install -g <package name>

//package.json - manifest file(stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
// npm init (step by step, create enter to skip)
// npm init -y (everything default)

const _ =require('lodash')
const a=['a',['b',['c',['d']]]]
const anew= _.flattenDeep(a)
console.log(anew)