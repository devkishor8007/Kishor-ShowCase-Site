const express = require('express');

const route = express.Router();

route.get('/blog', (req, res) => {
    res.render('blog');
});


module.exports = route;
