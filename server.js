// import express
const express = require('express');
const hbs = require('hbs');
const abc = require('./abc'); // custom modules

//create your app
const fb = express();

fb.set('views engine', hbs);

// routes

fb.get('/', (req, res) => {
    //console.log(req);
    //res.send('<h1>Welcome to my page</h1>');
    res.render('home.hbs', {
        pageTitle: 'my home page',
        message: 'Hello folks, i love node'
    });
});

fb.get('/about', (req, res) => {
    res.send("About Page");
});


fb.listen(3000, () => {
    console.log('server listening/running at port 3000');
});
