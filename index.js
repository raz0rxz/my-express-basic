// import express and save it in var
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.set('port', process.env.PORT || 3030);

app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json())


var users = [
    {"name":"Rendi BP", "age":16, "desc":"ok"},
    {"name":"Anisa Basyir", "age":17, "desc":"ok"}
]

// router
app.get('/users', function(req, res) {
    res.send(users)
})

app.get("/users/:id", function(req, res){
    var id = req.params.id
    res.send(users[id])
})

app.post("/users", function(req, res){
    var userData = req.body
    users.push(userData)
    res.status(201).send(userData)
})

app.delete("/users/:id", function(req, res){
    var id = req.params.id
    users.pop(id)
    res.send(users)
})

app.put("/users/:id", function(req, res){
    // tugas
    var id = req.params.id
    users.splice(id,1,req.body)
    res.send(users)
})
//server
app.listen("3000", function(){
  console.log("server running in port 300");
})
