var http = require('http'); 

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain "})
    res.end("Hola")
    })
    .listen(5000);
    
console.log("Servidor en la url http://127.0.0.1:5000/")