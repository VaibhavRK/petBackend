const express = require('express');
const app = express();
const dotenv = require('dotenv');
const petRoute = require('./routes/petRoute');

//using json middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//using router middlewares
app.use('/api',petRoute);

module.exports = app;