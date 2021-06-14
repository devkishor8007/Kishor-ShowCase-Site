const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
const UserRegister = require('../model/user');


route.get('/signup', (req, res) => {
    res.render('signup');

});

route.post('/signup', (req, res) => {
    var { username, email, password } = req.body;
    var err;
    if (!username || !email || !password) {
        err = "Please fill the box";
        res.render('signup', { 'err': err });
    }
    if (!password) {
        err = "Password Cannot matched";
        res.render('signup', { 'err': err });
    }
    if (typeof err == 'undefined') {
        UserRegister.findOne({ email: email }, function (err, data) {
            if (err) throw err;
            if (data) {
                console.log("User Exists");
                err = "User Already Exist with this email";
                res.render('signup', { 'err': err });
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) throw err;
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) throw err;
                        password = hash;
                        UserRegister({
                            email,
                            username,
                            password,
                        }).save((err, data) => {
                            if (err) throw err;
                            req.flash('success_message', "Registered Successfully");
                            res.redirect('/login');
                        });
                    })


                })
            }
        });
    }
});


module.exports = route;
