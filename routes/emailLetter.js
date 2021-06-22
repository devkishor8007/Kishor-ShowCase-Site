const express = require('express');
const route = express.Router();
const EmailLetter = require('../model/emailLetter');


route.get('/emailLetter', (req, res) => {
    res.render('indexx');
});

route.post('/emailLetter', (req, res) => {
    var { emailLetter } = req.body;
    var err;

    if (!emailLetter) {
        err = "Email Field is empty!";
        res.render('indexx', { 'err': err });
    }
    if (typeof err == 'undefined') {
        var postEmail = EmailLetter({ emailLetter });
        postEmail.save().then(() => {
            res.render('indexx', { success_message: "Successfully Send your mail!" });
        }).catch((e) => {
            console.log(e);
        })
    }

})

module.exports = route;