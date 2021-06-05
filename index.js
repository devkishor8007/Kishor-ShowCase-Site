const express = require('express');
const app = express();
const path = require('path');
// const dotenv = require('dotenv');
require('dotenv').config();

//call the file path
const main = path.join(__dirname, './templates/views');
const css = path.join(__dirname, './public');

app.use(express.static(css));

//set the ejs engine
app.set('view engine', 'ejs');
app.set('views', main);


//route of get
app.use('/', require('./routes/home'),);
app.use('/', require('./routes/blog'),);
app.use('/', require('./routes/contact'),);
app.use('/', require('./routes/about'),);


//calling port to listening server

var port = process.env.PORT;
var host = process.env.HOST;

app.listen(port, host, () => {
    console.log(`Server is listening ${host} ${port}`);
});
