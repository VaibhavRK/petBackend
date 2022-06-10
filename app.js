const express = require('express');
const app = express();
const dotenv = require('dotenv');
const petRoute = require('./routes/petRoute');
dotenv.config();

//using json middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//using router middlewares
app.use('/api',petRoute);

app.get('/',(req,res)=>{
    res.send('Welcome to Pet Api');
})

module.exports = app;