const mongoose = require('mongoose');

let ContactForm = new mongoose.Schema({
    nameForm: {
        type: String,
        trim: true
    },
    emailForm: {
        type: String,
        trim: true,
    },
    messageForm: {
        type: String,
        trim: true
    },
    message: [{
        type: String,
    }]
});

const ContactUs = new mongoose.model('ContactForm', ContactForm);
module.exports = ContactUs;