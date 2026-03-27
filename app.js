require("dotenv").config();

const express = require('express');
const cors    = require('cors');
const app     = express();

app.use(cors({
    origin: process.env.FRONTEND_URL
}));

app.get('/', (req,res) => {
    res.send('Hola Mundo!!')
});

module.exports = app;
