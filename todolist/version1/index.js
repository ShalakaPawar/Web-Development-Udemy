
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

var items = ["Buy Food", "Cook Food", "Eat Food"];
var worklist = [];

// set ejs as view engine
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    let day = date.getDay();
    res.render("list", {listTitle: day, newlist: items});
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work list", newlist: worklist} );
});

app.post("/", function(req, res){
    let item = req.body.newitem;
    if(req.body.listtype == "work"){
        worklist.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
