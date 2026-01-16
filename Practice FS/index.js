const fs= require('fs');
const path= require('path');

//Read file(sync)
const datasync = fs.readFileSync('./file-3.txt','utf-8');
console.log('sync:',datasync);

//Read files (async callback)
fs.readFile('./file-3.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error:',err);
        return;
    }
    console.log('Async:',data);
})

//Write a new file
fs.writeFileSync('output.txt','This is written by node fs module');

//Create a folder and write inside import PropTypes from 'prop-types'
const datadir= path.join(__dirname,'data');
if(!fs.existsSync(datadir)){
    fs.mkdirSync(datadir);
}
fs.writeFileSync(path.join(datadir,'info.txt'),'Sone info here');