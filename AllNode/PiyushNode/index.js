import { createServer } from 'http'
import fs from 'fs'

const myServer = createServer((req, res) => {
  const log = `${Date.now()} New request from ${req.url} ${req.method}\n`

  // Append the log to 'log.txt' and handle errors
  fs.appendFile('log.txt', log, err => {
    if (err) {
      console.error('Error writing to log.txt:', err)
    }
    res.end('Hello from the other side')
  })
})

myServer.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
