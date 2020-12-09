// HTTP Module -> Hyper Text Transfer Protocol Module 
// Using this module we try to communicate from the server/local machine with the browser
// Node.js to transfer data over this hyper text transfer protocol

var http = require('http')

// Create a Server Object
// Create Server takes in call back function as a parameter
// Call Back Function => req, res
http.createServer(function (req, res){
    res.write('Hello World') // Writing a response to the browser/client
    res.end() // End the response
}).listen(3000) // The Server object listens on port number 3000
// Localhost : 127.0.0.1/localhost

// Adding an HTTP Header
// HTTP Header -> It specifies the kind of information that you are trying to send
var http1 = require('http')
http1.createServer(function (req, res){
    // 200 Means the server is good up and running
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write('HTML Code Example')
    res.end()
}).listen(8080)
