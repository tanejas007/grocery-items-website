const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    address:{type:String, required:true},
    name:{type:String, required:true},
    phone_number:{type:Number, required:true},
    paymentId:{type:String, required:true},
});

mongoose.model('Product',productSchema);