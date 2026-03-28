require("dotenv").config();

const express = require('express');
const cors    = require('cors');
const app     = express();

const corsOptions = {
  origin: "https://animaladas.netlify.app",
  credentials: true
};

app.use(cors(corsOptions));
// NO USES app.options('*', ...) - ya no funciona en Express 5

app.get('/', (req, res) => {
    res.send('Hola Mundo!!')
});

module.exports = app;