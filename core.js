// const os = require('os');
const fs = require('fs');
fs.readFile('./readme.md', 'utf-8', (err,data)=>{
  if(err){
     console.log(err) ;
     return;
  }
  console.log(data);
});

