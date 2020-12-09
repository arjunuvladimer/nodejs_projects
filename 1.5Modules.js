// A Module is a library with set of functions you want to include in your application

// 1. Inbuilt Modules -> Which comes along with Nodejs Installation
// 2. Third Party Modules -> E.g: npmjs.com 
// 3. Custom Modules -> Which you develop 

// To include any particular module we use a directive called require() function

// Notes: 
// Absolute Path
// C://node_modules/color/index.js
// Relative Path
// node_modules/colors

// When you require any module -> It goes and checks whether the module exist node_modules folder

// 1. Inbuilt http Module 
var http = require('http')

// 2. Third Party Modules
var lodash = require('lodash')

// 3. Custom Modules
var dateAndTime = require('./1.6Custom_Module.js')