const express = require('express');
const UserLogin = require('../model/user');
const route = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

//authentication strategy
var localStrategy = require('passport-local').Strategy;
const { initialize } = require('passport');
passport.use(new localStrategy({
    usernameField: 'email'
}, (email, password, done) => {
    UserLogin.findOne({ email: email }, (err, data) => {
        if (err) throw err;
        if (!data) {
            return done(null, false, { message: 'User doesnot exits' });
        }
        bcrypt.compare(password, data.password, (err, match) => {
            if (err) {
                return done(null, false);
            }
            if (!match) {
                return done(null, false, { message: 'Password doesnot match' });
            }
            if (match) {
                return done(null, data);
            }
        });
    });
}));

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    UserLogin.findById(id, function (err, user) {
        cb(err, user);
    })
});
//end of auth strategry


route.get('/login', (req, res) => {
    res.render('login');
});

route.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/home',
        failureFlash: true,
    })(req, res, next);

});


module.exports = route;





