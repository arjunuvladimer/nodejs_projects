// Three Importrant Components
// 1. Importing Required Modules - We use the require directive to load Node.js Modules
// 2. Create Server - A server which listens to the clients requests 
// 3. Read Request and Return Response - Here most of the time read HTTP request made by the 
// client [from browser or a console] and return the response

// 1. Imported HTTP Module to serve web
var http = require("http")

// 2. Creating Server
http.createServer(function (request, response){
    // Send the HTTP header
    // HTTP Status: 200: OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type':'text/plain'})

    // Send the repsonse body as "Hello World"
    response.end('Hello World \n')
}).listen(8081)

console.log("Server Running at http://127.0.0.1:8081")


// HTTP Protocol
// World Wide Web Communication
// 1. A Client/Browser sends an HTTP request to the web
// 2. An Web Server recives the request
// 3. The server runs the application to process the request
// 4. The Clien (the browser) recieves the response