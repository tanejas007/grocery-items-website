const express = require('express');
// var csrf = require('csurf');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');
var session = require('express-session');
var flash = require('connect-flash');
var locateModel = require('../models/location');
var location=locateModel.find({});
var Product = require('../models/products');
// var Order = require('../models/order.model');
// var MongoStore = require('connect-mongo')(session);
// var csrfProtection = csrf();
var passport = require('passport');
var router = express.Router();
router.use(flash());
router.use(passport.initialize());
router.use(passport.session());
router.use(session({
    secret: 'mysupersecret',
    resave: false,
    saveUninitialized: false
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    // cookie: {maxAge: 180 * 60 * 1000}
}));
mongoose.set('useFindAndModify',false);
router.get('/',(req , res)=>{
    res.sendFile(__dirname + '/index.html');
});
router.get('/menu',(req,res)=>{
    res.render('menu');
});
router.get('/user/profile', isLoggedIn, function(req, res, next){
    res.render('user/profile');
});
router.get('/user/logout',isLoggedIn, function(req, res, next){
    res.logout();
    res.redirect('/');
});
router.use('/', notLoggedIn, function(req, res, next){
    next();
});

// router.get('/menu',(req,res)=>{
//     res.render('menu');
// });
// router.use(csrfProtection);
router.get('/cart',(req,res)=>{
    res.render('cart');
});
router.get('/orders',(req,res)=>{
    res.render('orders');
});

router.get('/shampoo',(req,res)=>{
    res.render('types/shampoo');
});
router.get('/soap',(req,res)=>{
    res.render('types/soap');
});
router.get('/atta',(req,res)=>{
    res.render('types/atta');
});
router.get('/coffee',(req,res)=>{
    res.render('types/coffee');
});
router.get('/colgate',(req,res)=>{
    res.render('types/colgate');
});
router.get('/dal',(req,res)=>{
    res.render('types/dal');
});
router.get('/deo',(req,res)=>{
    res.render('types/deo');
});
router.get('/fruits',(req,res)=>{
    res.render('types/fruits');
});
router.get('/kitchen',(req,res)=>{
    res.render('types/kitchen');
});
router.get('/masala',(req,res)=>{
    res.render('types/masala');
});
router.get('/milk',(req,res)=>{
    res.render('types/milk');
});
router.get('/rice',(req,res)=>{
    res.render('types/rice');
});
router.get('/salt',(req,res)=>{
    res.render('types/salt');
});
router.get('/tea',(req,res)=>{
    res.render('types/tea');
});
router.get('/hr',(req,res)=>{
    res.render('types/hr');
});
router.get('/cd',(req,res)=>{
    res.render('types/cd');
});
router.get('/bs',(req,res)=>{
    res.render('types/bs');
});
router.get('/covid',(req,res)=>{
    res.render('types/covid');
});
router.get('/vegetables',(req,res)=>{
    res.render('types/vegetables');
});
router.get('/about',(req, res)=>{
    res.render('links/about');
});
router.get('/contact',(req, res)=>{
    res.render('links/contact');
});
router.get('/shopnow',(req,res)=>{
    res.render('shopnow');
});
router.get('/location',(req,res)=>{
    res.render('location');
});
router.get('/admin',(req,res)=>{
    Order.find((err,docs)=>{
        if(!err){
            res.render("admin",{
                order:docs
            });
        }
        else{
            console.log("Error in orders:" +err);
        }
    });
});
router.get('/order/:id',(req,res)=>{
    Order.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render("orders",{order:doc});
        }
        else{
            console.log("Error in Find By id:" +err);
        }
    });
});
router.get('/order/delete/:id',(req,res)=>{
    Order.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.redirect('/admin');
        }
        else{
            console.log("Error in Delete:" +err);
        }
    });
});

router.post('/cart',(req,res)=>{
    insertOrder(req,res);
});
function insertOrder(req,res) {
    var d= new Date();
    var t=d.getTime();
    var counter= t;
    counter+=1;
    var order= new Order();
    order.total=req.body.total;
    order.order=counter;
    order.save((err,doc)=>{
        if(!err){
            console.log('order: '+order);
            res.redirect('/location');
        }
        else{
            console.log('Error in insertOrder: ' +err);
        }
    });
}
router.post('/orders',(req,res)=>{
    updateOrder(req,res);
});

router.post('/location', function(req, res, next){
  try {
    var locationDetails = new locateModel({
    name:req.body.name,
    email:req.body.email,
    address:req.body.address,
    city:req.body.city,
    phone_number:req.body.phone_number.toString(),
    })
    res.redirect('/checkout');
    locationDetails.save();
  }
  catch {
    res.redirect('location');
  }
  console.log(locationDetails);
});
function updateOrder(req,res) {
    Order.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,doc)=>{
        if(!err){
            res.redirect('/admin');
        }
        else{
            console.log("update error: " +err);
        }
    });
}

router.get('/user/signup', function(req,res){
    var messages = req.flash('error');
    res.render('user/signup',{messages: messages, hasErrors: messages.length > 0});
});
router.post('/user/signup', passport.authenticate('local.signup',{
    successRedirect:'/user/profile',
    failureRedirect:'/user/signup',
    failureFlash: true
}));

router.get('/user/signin', function(req,res){
    var messages = req.flash('error');
    res.render('user/signup',{ messages: messages, hasErrors: messages.length > 0});
});
router.post('/user/signin',passport.authenticate('local.signin',{
    successRedirect:'/user/profile',
    failureRedirect:'/user/signin',
    failureFlash: true 
}));

router.get('/checkout',(req,res)=>{
    var order= new Order();
    var errMsg = req.flash('error')[0];
    res.render('checkout',{total : req.body.total, errMsg: errMsg, noError: !errMsg});
});

router.post('/checkout',(req, res, next)=>{
    var stripe = require("stripe")(
        "sk_test_81V6N1kK4kF9M08MQXHaZD2c008j9rP4Gm"
);
    stripe.charges.create({
        amount: {total : req.body.total} ,
        currency: "usd",
        source: req.body.stripeToken,
        description:"Test Charge"
    }, function(err, charge){
            if(err){
                req.flash('error',err.messages);
                return res.redirect('/checkout');
            }
            var product = new Product({
                address: req.body.address,
                name: req.body.name,
                phone_number:req.body.phone_number.toString(),
                paymentId: charge.id,
            });
            product.save(function(err, result){
                req.flash('success','Successfully bought Products!');
                res.redirect('/cash');
                console.log(result);
            });
    });
});

// router.post('/checkout',(req, res)=>{
//     insertOrder(req,res);
// });

router.get('/cash',(req,res)=>{
    res.render('cash');
});

module.exports = router;

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}