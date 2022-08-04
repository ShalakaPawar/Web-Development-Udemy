const express = require("express");
const http = require("https");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(request, response){
    response.sendFile(__dirname+"/index.html");
});

app.post("/", function(request, response){
    console.log("Post received");
    var cityName = request.body.city;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=53794ff0f41898a35d8acd7bc3e64728&units=imperial";
    http.get(url, function(resp){
        console.log(resp.statusCode);
        resp.on("data", function(data){
            const text = JSON.parse(data);
            console.log(text);
            const temp = text.main.temp;
            const weatherCondition = text.weather[0].description;
            const icon = text.weather[0].icon;
            const iconURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            response.write("<p>The weather in "+cityName+" is "+weatherCondition+"</p>");
            response.write("<h1>The temperature is "+temp+"</h1>");
            response.write("<img src="+iconURL+">");
            response.send();
        });
    });
});

app.listen(3000, function(){
    console.log("Server started...");
})