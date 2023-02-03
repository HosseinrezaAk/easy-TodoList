const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs'); // to pass data to front. check document

var items = [];

app.get("/", function( req, res){
    var today = new Date();
    var currentDay = today.getDay();
    
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("list", {
        kindOfDay : day,
        newListItems : items
    })
});
app.post("/", function( req, res){
    var item = req.body.newItem;
    items.push( req.body.newItem);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on http://localhost:3000");
});