const express = require("express");
app = express();

app.get("/", function(req,res){
  res.sendFile("/index.html");
})

app.listen(process.env.PORT, process.env.IP);
