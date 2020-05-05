var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/login',{useNewUrlParser: true,useUnifiedTopology: true});
var conn=mongoose.connection;
var locationSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    phone_number: Number,
});
var locationModel = mongoose.model('Location',locationSchema);
module.exports=locationModel;