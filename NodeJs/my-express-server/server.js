const express = require("express");

const app = express();
app.get("/", function(req, res){
    res.send("Hello");
});

app.get("/contact", function(req, res){
    res.send("Hey there! Contact me at shalaka@gmail.com");
})

app.get("/about", function(req, res){
    res.send("<h1>I am a computer engineering student at COEP. I love to code and learn new things.</h1>");
})


app.listen(3000, function () { 
    console.log("Server has started");
 });

