const express = require('express');
// var csrf = require('csurf');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');
var flash = require('connect-flash');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
// var csrfProtection = csrf();
var passport = require('passport');
var router = express.Router();

// router.use(session({secret: 'mysupersecret', resave: false, saveUninitialized: false}));
// router.use(csrfProtection);






module.exports = router;

