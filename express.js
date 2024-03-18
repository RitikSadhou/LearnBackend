const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World HHiii')
})

app.get('/profile',function(req,res){
    res.send(" Profile")
})

app.get('/Dashboard',function(req,res){

    res.send("Dashboard")
})


// Dyanmic Routing :- To make any route dyanmic you can use ":" at the place where you want to make it dyanmic and to acess there value use req.prams
app.get('/profile/ritik',function(req,res){
    res.send("Ritk Profile")
})

app.get('/profile/:username',function(req,res){
    res.send(req.params.username + " is a super cool user.")
})



app.listen(3000, ()=>{
    console.log("Server is live on Port Num. 300");
})