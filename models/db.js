const mongoose = require('mongoose');
const connect = require('connect');
mongoose.connect('mongodb+srv://mongodbuser:Welcome24@tanejas007-rywcr.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log("mongodb connected");
    }
    else{
        console.log("disconnected:" +err);
    }
});
require('./order.model');
require('./products');
require('./location');