const express = require('express');
const Contacts = require('../model/contactForm');
const route = express.Router();

route.get('/contact', (req, res) => {
    res.render('contact');
});

route.post('/contact', (req, res) => {
    var { nameForm, emailForm, messageForm } = req.body;
    var err;
    if (!nameForm || !emailForm || !messageForm) {
        err = "Please fill the box";
        res.render('contact', { 'err': err });
    }
    if (typeof err == 'undefined') {
        var contactthr = Contacts({
            nameForm,
            emailForm,
            messageForm
        });

        contactthr.save().then(() => {
            console.log(contactthr);
            res.render('contact', { success_message: 'Successfully Forwared your Message' });

        }).catch((e) => {
            console.log("kai kaha k ");
        });
    }

})

module.exports = route;
