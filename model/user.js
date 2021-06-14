const mongoose = require('mongoose');

let Users = new mongoose.Schema({
    username: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true
    },
    message: [{
        type: String,
    }]
});

const UserLogin = new mongoose.model('UserFetch', Users);
module.exports = UserLogin;