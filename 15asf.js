const {readFile}=require('fs');
const { result, reject } = require('lodash');
const { resolve } = require('path');

const gettext = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    }
    )
}
// gettext("./content/first.txt").
// then(result=>console.log(result)).
// catch(err =>console.log(err))

const start= async()=>{
    try {
        const first= await gettext("./content/first.txt")
        const second= await gettext("./content/second.txt")
        console.log(first,second)
        
    } catch (error) {
        console.log('error')
    }

}
start()