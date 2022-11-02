const express = require('express')
const https = require('https');
const bodyParser = require("body-parser");
const { on } = require('events');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(request, response){
    response.sendFile(__dirname+"/index.html");
});

app.post("/", function(request, response){
    console.log("Post received");
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    var emailId = request.body.emailId;

    var data = {
        members: [
            {
                email_address: emailId,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data);
    const url = "https://us10.api.mailchimp.com/3.0/lists/e7b7cd259c";
    const options = {
        method: "POST",
        auth: "shalaka123456:8708fac43e27eb1f2e9925f1c624e8f4-us10"
    }
    const req = https.request(url, options, function(resp){
        //console.log(resp.statusCode);
        if(resp.statusCode != 200){
            response.sendFile(__dirname + "/failure.html");   
        }
        else{
            response.sendFile(__dirname + "/success.html");
        }
    });
    req.write(jsonData);
    req.end();
})

app.post("/backtomain", function(req, resp){
    resp.redirect("/");
});

app.listen(process.env.PORT || port, () => console.log("Server running on port 3000..."));


//8708fac43e27eb1f2e9925f1c624e8f4-us10
//8708fac43e27eb1f2e9925f1c624e8f4-us10
//unique id = e7b7cd259c