require("dotenv").config();

const express = require('express');
const cors    = require('cors');
const app     = express();

const productRoutes = require('./routes/productRoutes');
const articleRoutes = require('./routes/articleRoutes');
const postRoutes    = require('./routes/postRoutes');
const authRoutes    = require('./routes/authRoutes');

const corsOptions = {
  origin: ['https://animaladas.netlify.app', 'http://localhost:5174', 'http://localhost:5173'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(express.json());

//USAR RUTAS
app.use('/api/products', productRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hola Mundo!!')
});

module.exports = app;