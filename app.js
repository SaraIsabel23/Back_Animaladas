require("dotenv").config();

const express = require('express');
const cors    = require('cors');
const app     = express();

//app.use(cors({
  //  origin: process.env.FRONTEND_URL
//}));
//app.use(cors());
app.use(cors({
  origin: "https://animaladas.netlify.app",
  credentials: true
}));

app.options('*', cors());

app.get('/', (req,res) => {
    res.send('Hola Mundo!!')
});

module.exports = app;
