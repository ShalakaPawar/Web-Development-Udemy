const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})


app.post("/", function(req, res){
    var num1 = Number(req.body.Number1);
    var num2 = Number(req.body.Number2);
  //  res.send("Thanks for posting");
    res.send("<h2>The answer generated = "+(num1+num2)+"</h2>");
})

function get_bmi(weight, height){
    var bmi = Math.round(weight/(height*height));
    
    return bmi;
}

app.post("/bmicalculator", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var output = get_bmi(weight, height);
    res.send("<h2>Your BMI is "+output+"</h2>");
})

app.listen(3000, function(req, res){
    console.log("Server has started...");
})