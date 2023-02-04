const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.set('view engine', 'ejs'); // to pass data to front. check document
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

let items = [];

app.get("/", function( req, res){
    let today = new Date();
    let currentDay = today.getDay();
    
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    res.render("list", {
        listTitle : day,
        newListItems : items
    })
});
app.post("/", function( req, res){
    let item = req.body.newItem;
    items.push( req.body.newItem);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on http://localhost:3000");
});