// var figlet = require("figlet");

// figlet("Ritik sadhou", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// Express Code 
// const express = require('express')
// const app = express()

// // MiddilWare

// app.use(function(req, res, next){
//     console.log("Middleware");
//     next();
// });

// app.get('/', function (req, res) {
//   res.send('Hello ')
// })

// app.get('/profile', function (req, res) {
//     res.send('Hello Profile')
//   })
// app.listen(3000)


var fs=require('fs');
var os=require('os');
var user=require('data')
const user=os.userInfo()
console.log(user.username);

