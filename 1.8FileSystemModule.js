// File System Module

var fs = require('fs')

// Common Uses
// 1. Reading a File
// fs.readFile() -> read files on your server/local machine
// var http = require('http')

// http.createServer(function(req, res){
//     // readFile takes in two parameters 
//     // 1. File Name
//     // 2. Call Back Function
//     fs.readFile('demo.html', function(err, data){
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(data)
//         return res.end()
//     })
// }).listen(3000)
// console.log("Server Running at http://127.0.0.1:3000")

// 2. Creating a File
// 2.1 fs.appendFile() -> if the file does not exist, the file will be created
fs.appendFile('newFile.txt', "Hewllo Content!", function(err){
    if(err) throw err
    console.log('Saving the file!')
})
// 2.2 fs.open() -> fs.open('file_name','w') -> if w flagging it saying that we are going
// write into the file
fs.open('newFile2.txt','w',function(err, file){
    if(err) throw err
    console.log('Saving the file using open function')
})
// 2.3 fs.writeFile()
fs.writeFile('newFile3.txt', 'Changing the new content', function(err){
    if(err) throw err
    console.log("Saving the file using writeFile Function")
})
// 3. Updating a File
// fs.appendFile()
// fs.writeFile()
fs.appendFile('newFile.txt','This is my text', function(err){
    if(err) throw err
    console.log("Updating with append File")
})
fs.writeFile('newFile2.txt','I want to change new content', function(err){
    if(err) throw err
    console.log("Replacing with write File Function")
})
// 4. Deleting a File
// fs.unlink() method delete the specified file
fs.unlink('input.txt', function(err){
    if(err) throw err
    console.log('Input text file got deleted')
})
// 5. Renaming a File
// fs.rename() renames the specified file we represent
fs.rename('newFile3.txt', 'newFileNameChange.txt', function(err){
    if(err) throw err
    console.log('Renamed the file newFile3.txt')
})