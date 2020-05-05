require('./models/db');
require('./config/passport');
var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
var exphbs = require('express-handlebars');
var bodyparser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var validator = require('express-validator');
var favicon = require('serve-favicon');
var MongoStore = require('connect-mongo')(session);
var index = require('./routes/index');
// var user = require('./controller/user');

var app = express();
app.use(session({
    secret: 'mysupersecret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {maxAge: 180 * 60 * 1000}
}));
app.use(function(req, res, next){
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
});
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, '/public')));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.set('views',path.join(__dirname,'views'));
app.set('types',path.join(__dirname,'types'));
app.engine('hbs',exphbs({
    extname: 'hbs',
    defaultLayout:'mainLayout',
    layoutDir: __dirname + '/views/'

}));
app.set('view engine','hbs');
app.listen(3000,()=> {
    console.log("server running on the port 3000");
});
app.use('/',index);
// app.use('/user',user);