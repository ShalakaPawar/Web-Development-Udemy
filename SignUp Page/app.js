const express = require('express')
const http = require('https');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(request, response){
    response.sendFile(__dirname+"/signup.html");
});


app.listen(port, () => console.log("Server running on port 3000..."));