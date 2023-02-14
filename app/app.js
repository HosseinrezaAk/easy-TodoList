const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.set('view engine', 'ejs'); // to pass data to front. check document
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/todoListDB");

const itemSchema = {
    name: String
};

const Item = mongoose.model("Item",itemSchema);
const item1 = new Item ({
    name: "task1"
});
const item2 = new Item ({
    name: "task2"
});
const item3 = new Item ({
    name: "task3"
});
const defaultItems = [item1, item2, item3];

// Item.insertMany(defaultItems,function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("saved to DB successfuly");
//     }
// })
app.get("/", function( req, res){
    Item.find({},function(err, findItems){
        res.render("list", {
            listTitle : "Today",
            newListItems : findItems
        })
    });
    
});
app.post("/", function( req, res){
    let item = req.body.newItem;
    console.log(req.body);
    if( req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
});
app.get("/work" , function ( req, res){
    res.render(
        "list",
        {
            listTitle : "Work List",
            newListItems : workItems
        }
    );
});
app.get("/about" , function( req, res){
    res.render("about");
});
app.listen(3000, function(){
    console.log("Server started on http://localhost:3000");
});