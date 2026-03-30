const Article = require('../models/Article');

const articleController = {
    async getAll (req, res) {
        try{
            const articles = await Article.find();
            res.json(articles)
        } catch(error) {
            console.log(error)
            res.status(500).json({ error: 'Error al obtener los articulos' });
        }
    },
    async getById (req, res) {
        try{
            const id      = req.params.id;
            const article = await Article.findById(id);
            if(!article) {
                return res.status(404).json({ error: 'Articulo no encontrado' });
            }
            res.json(article)
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener el articulo' });
        }
    },
    async create (req, res) {
        try {
            const article = await Article.create(req.body);
            res.status(201).json(article)
        } catch(error) {
            console.log(error);
            res.status(400).json({ error: 'Error al crear el articulo' });
        }
    },
    async update (req, res) {
        try {
            const id      = req.params.id;
            const article = await Article.findByIdAndUpdate(id, req.body, { new: true });
            if(!article) {
                return res.status(404).json({ error: 'Articulo no encontrado' });
            }
            res.json(article);
        } catch(error) {
            console.log(error);
            res.status(400).json({ error: 'Error al actualizar el articulo' });
        }
    },
    async delete (req, res) {
        try {
            const id      = req.params.id;
            const article = await Article.findByIdAndDelete(id);
            if(!article) {
                return res.status(404).json({ error: 'Articulo no encontrado' });
            }
            res.json({ message: 'Articulo eliminado correctamente' });
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: 'Error al intentar eliminar el articulo' });
        }
    }
};

module.exports = articleController;