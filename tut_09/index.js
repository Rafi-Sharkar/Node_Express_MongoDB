const http = require("http")
const port = 3000
const hostname = '127.0.0.1'
const fs = require("fs")



const server = http.createServer((req, res)=>{

    const handleReadFile = (statusCode, fileName) => {
        fs.readFile({fileName}, (err, data)=>{
            res.writeHead({statusCode}, {"Content-Type": "text/html"})
            res.write(data)
            res.end()
        })
    }

    if(req.url === '/'){
        handleReadFile(200, "./pages/index.html")
    }
    else if(req.url === '/about'){
        handleReadFile(200, "./pages/About.html")
    }
    else if(req.url === '/contact'){
        handleReadFile(200, "./pages/Contact.html")
    }
    else{
        handleReadFile(404, "./pages/Error.html")
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server is running successfully at http://${hostname}:${port}`)
})