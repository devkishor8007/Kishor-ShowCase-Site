const express = require('express');

const route = express.Router();

const checkAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
        return next();
    } else {
        res.redirect('/login');
    }
}

// route.get('/reading', checkAuthenticated, (req, res) => {
//     res.render('reading');
// });

route.get('/helpBlog', checkAuthenticated, (req, res) => {
    let yesData = {
        question: "Five Reasons to help other people?",
        id: '5',
        fiveHelp: ["It makes you happy",
            "It can help you like longer",
            "It builds strong social connections to your friends and the community",
            "It’s good for your career",
            "You’ll boost your self-esteem"],
        index: ["1", "2", "3", "4", "5"],
    }
    res.render('helpBlog', yesData);
});


route.get('/programmingBlog', checkAuthenticated, (req, res) => {
    let yesData = {
        question: "Five Reasons to learn programming langauge?",
        id: '5',
        fiveHelp: ["Programming is definitely a fruitful career option",
            "You don’t need any special qualification to be a Programmerr",
            "Programming teach you how to think",
            "You can create snything you want",
            "You learn problem solving skills"],
        index: ["1", "2", "3"],

    }
    res.render('programmingBlog', yesData);
});

route.get('/readBookBlog', checkAuthenticated, (req, res) => {
    let yesData = {
        question: "Five Reasons to read a Books?",
        id: '5',
        fiveHelp: ["It imparts valuable lessons from years of experiences",
            "It improves your Focus and Concentration",
            "It improves your vocabulary, language command, and communication skills",
            "Stronger Analytical Thinking Skills",
            "Better Writing Skills"],
    }
    res.render('readBookBlog', yesData);
});

route.get('/doingexerciseBlog', checkAuthenticated, (req, res) => {
    let yesData = {
        question: "Five Reasons to doing a Regular Exercise?",
        id: '5',
        fiveHelp: ["It boosts your Metabolism / Immune System",
            "It improves memory",
            "It helps to manage weight loss",
            "It improves digestion",
            "It helps reduce stress"],
    }
    res.render('doingexerciseBlog', yesData);
});

module.exports = route;
