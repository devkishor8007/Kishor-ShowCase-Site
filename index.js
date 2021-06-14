require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.SECRET_KEY));
app.use(session({
    secret: process.env.SECRET_KEY,
    maxAge: 3600000,
    resave: true,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//global flash variable
app.use(function (req, res, next) {
    res.locals.success_message = req.flash('success_message');
    res.locals.error_message = req.flash('error_message');
    res.locals.error = req.flash('error');
    next();
});

//call the mongoDB
require('./config/connect_db');

//call the file path
const main = path.join(__dirname, './templates/views');
const css = path.join(__dirname, './public');

//set the ejs engine
app.set('view engine', 'ejs');
app.set('views', main);

app.use(express.static(css));
app.use(express.json());

//route of get
app.use('/', require('./routes/home'),);
app.use('/', require('./routes/blog'),);
app.use('/', require('./routes/contact'),);
app.use('/', require('./routes/about'),);
app.use('/', require('./routes/login'),);
app.use('/', require('./routes/signup'),);
app.use('/', require('./routes/course'),);
app.use('/', require('./routes/indexx'),);
app.use('/', require('./routes/logout'),);
app.use('/', require('./routes/successhome'),);

//calling port to listening server
var port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening ${port}`);
});
