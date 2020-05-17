const express = require("express");
app = express();

app.use(express.static(__dirname))

app.get("/", function(req,res){
  res.sendFile("./index.html");
})

app.listen(process.env.PORT, process.env.IP);
