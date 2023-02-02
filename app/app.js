const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();

app.get("/", function( req, res){
    var today = new Date();
    var currentDay = today.getDay();
    if( currentDay === 6 || currentDay === 0){
        res.send("It's weekend");
    }else{
        res.send("It's Work day");
    }
    // res.send("hello");
});


app.listen(3000, function(){
    console.log("Server started on http://localhost:3000");
});