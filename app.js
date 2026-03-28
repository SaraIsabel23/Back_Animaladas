require("dotenv").config();

const express = require('express');
const cors    = require('cors');
const app     = express();

// Define las opciones de CORS UNA VEZ
const corsOptions = {
  origin: "https://animaladas.netlify.app",
  credentials: true
};

// Aplica CORS con las mismas opciones en ambos lugares
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));  // <-- AHORA USA LAS MISMAS OPCIONES

app.get('/', (req, res) => {
    res.send('Hola Mundo!!')
});

module.exports = app;
