'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/top', (req, res) => {
    res.render('top.ejs');
});

app.listen(3000);
console.log("Running on http://localhost:8080")



// Constants
// const PORT = 8080;
// const HOST = '0.0.0.0';

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);