const http = require('http')
const port = 3000
const hostname = '127.0.0.1'

const myServer = http.createServer((req,res)=>{
    res.end('Hellow. I am Rafi Sharkar')
})


myServer.listen(port, hostname, ()=>{
    console.log(`Server is running successfully at http://${hostname}:${port}`)
})
 



