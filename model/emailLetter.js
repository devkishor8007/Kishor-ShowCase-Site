const mongoose = require('mongoose');

let EmailLetter = new mongoose.Schema({
    emailLetter: {
        type: String,
        trim: true,
        unique: true,
    },
    message: [{
        type: String,
    }]
});

const EmailFeedLetter = new mongoose.model('EmailLetter', EmailLetter);
module.exports = EmailFeedLetter;