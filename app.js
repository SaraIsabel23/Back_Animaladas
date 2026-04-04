require("dotenv").config();

const express    = require('express');
const cors       = require('cors');
const swaggerUi  = require('swagger-ui-express');
const swaggerDoc = require('./docs');
const app        = express();

const productRoutes = require('./routes/productRoutes');
const articleRoutes = require('./routes/articleRoutes');
const postRoutes    = require('./routes/postRoutes');
const authRoutes    = require('./routes/authRoutes');
const uploadRoutes  = require('./routes/uploadRoutes');


app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//RUTAS
app.use('/api/products', productRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/', (req, res) => {
    res.send('Hola Mundo!! Documentación en /api-docs')
});

module.exports = app;
