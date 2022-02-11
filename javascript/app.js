// notes about node.js. Ryan Dahl is a brilliant being.
// node is a runtime environment for executing java script.
// node is not a language.
// asychronous by default.
// databases are constantly monitored by eventqueue.
// in node single threads are used to alternate between requests.
// node is a good option for aplications that make a lot of use of internet or disk access due to it's asychronous behavior.
// more client's access with less hardware
// weak in strong-based cpu tasks

//console.log(); global objects in javascript
//setTimeout();  call a function after a delay
//clearTimeout()  removes the delay of a function to be called
//setInterval()  call a funciton repeatedly.
//clearInterval() stop repeatedly calling a function
//console.log(module); checks a module in global.
//var creates variables and const constants, they differ in level, being const not overwriteable.

// files are defined by modules? or something like this. what really matters is that files are better used when treated as building blocks.


const log = require("./logger");
log("messsage");