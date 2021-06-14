const mongoose = require('mongoose');

const dotenv = require('dotenv').config();
mongoose.connect(process.env.Mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log('MongoDB is connected');
}).catch((e) => {
    console.log('MongoDB is not connected');
});