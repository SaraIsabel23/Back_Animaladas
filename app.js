require("dotenv").config();

const express = require('express');
const cors    = require('cors');
const app     = express();

const productRoutes = require('./routes/productRoutes');
const articleRoutes = require('./routes/articleRoutes');
const postRoutes    = require('./routes/postRoutes');

const corsOptions = {
  origin: "https://animaladas.netlify.app",
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

//USAR RUTAS
app.use('/api/products', productRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hola Mundo!!')
});

module.exports = app;