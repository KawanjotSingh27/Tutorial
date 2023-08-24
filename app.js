const {readFile}=require("fs");

const getFile=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,"utf8",(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

getFile("./first.txt").then(data=>console.log(data)).catch(error=>console.log(error));