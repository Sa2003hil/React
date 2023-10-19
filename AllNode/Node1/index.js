const http = require('http')
const fs = require('fs')
// const data = {age:20};

// creatin a server with node js

/*

Jab bhi mein localhost:8080 pe request bhejunga toh yeh server chalega and hum jitni baar bhi request bhejenge yeh server chalega like if we click 5 times then it sends the request 5 times and the server will run 5 times

Server ek tarah ka function hota hai jo har baar reques aane pe ek baar chalta hai

*/

const index = fs.readFileSync('index.html', 'utf-8') // this is used to read the file
const data = fs.readFileSync('data.json', 'utf-8') // this is used to read the file

const server = http.createServer((req, res) => {
  console.log(req.url)
  console.log('server started...')
  res.setHeader('Content-Type', 'application/json') // this is used to set the header of the response
  // res.end('<h1>hello from the other side</h1>');   // this is used to send the response to the client
  // res.end(JSON.stringify(data));
  res.end(data)
  res.setHeader('Content-Type', 'application/json')
  console.log(index)
})

//  this is used to connect the server to the port
server.listen(8080)
