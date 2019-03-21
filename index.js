const express = require('express')
const app = express()

//app.use(express.static('/public'))
app.use("/public", express.static(__dirname + "/public"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function () {console.log("Working on port 3000")})