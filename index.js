const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3015;

app.use(express.json());
app.use(require('./controllers/brands.controller'))

mongoose.connect("mongodb+srv://Muhammad:tasuhanov@elona.fqhgu.mongodb.net/myFirstDatabase24?retryWrites=true&w=majority").then(()=>{
    app.listen(port, ()=>{
        console.log("working...")
    })
}).catch((err)=> console.error(err))