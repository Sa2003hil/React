// practical : make a server and update the cart using the json data

const http = require('http')
const fs = require('fs')
const { json } = require('stream/consumers')

/*

Method 1:p

const index = fs.readFileSync('index.html', 'utf-8')

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log('server started')
    res.setHeader('Dummy', 'Dummyvalue')  --> to set the headers 
    res.end('<h1>Heloo</h1>')
    res.setHeader('Content-Type', 'text/html')
    res.end(index)
    
})

Method 2:-


const data = { age: 20 }

const sever = http.createServer((req, res) => {
  console.log(req.url)  ---> this is the mehtod to get the request

  console.log('server started..') // to check that server is started or not

  res.end(JSON.stringify(data))  ---> to change the JSON data into string format
})


Method 3:- DataJson- How to show data in server side

const IphoneData = fs.readFileSync('data.json', 'utf-8')

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.setHeader('Content-Type', 'application/json')
  console.log('server started')
  res.end(IphoneData)
})


Method 4:- Dynamic HTML / SSR / Templating 

*/

const IphoneData = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const index = fs.readFileSync('index.html', 'utf-8')
const products = IphoneData.products // this will give an errorCannot read properties of undefined (reading '0') we have to convert  IphoneData into json using JSON.parse()

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)
  // console.log('server started')

  if (req.url.startsWith('/product')) {
    const id = req.url.split('/')[2]
    const product = products.find(p => p.id === +id)

    if (product) {
      res.setHeader('Content-Type', 'text/html')
      let modifiedIndex = index
        .replace('**title**', product.title)
        .replace('**price**', product.price)
        .replace('**rating**', product.rating)
        .replace('**url**', product.thumbnail)
      res.end(modifiedIndex)
    } else {
      res.writeHead(404)
      res.end('Product not found')
    }
  } else if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.end(index)
  } else if (req.url === '/api') {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(IphoneData))
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
})

server.listen(8080)
