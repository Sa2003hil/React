// main purpose of node is to run  javasript on system outside of browser

// const lib = require('./new')
import {sum,diff} from './new.js'
import fs from 'node:fs';  // fs is the is the file system module 


const t1 = performance.now();

// for reading file 

const txt = fs.readFileSync('./demo.txt','utf-8');   // ----> this method is synchronous means it will block the code until it is executed

// console.log(txt); 

// This method is asynchronous means it will not block the code and will execute the code in the background and will execute the callback function when it is done
// fs.readFile('./demo.txt','utf-8',(err,txt)=>{
//     console.log(txt);
// });

console.log(sum(4,5),diff(9,3));
const t2 = performance.now();

console.log(t2-t1);