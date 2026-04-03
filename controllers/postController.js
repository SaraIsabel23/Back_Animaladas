const Post = require('../models/Post');

const postController = {
    async getAll (req, res) {
        try {
            const posts = await Post.find()
                .populate('user', 'name email')
                .sort({ createdAt: -1 });
            res.json(posts)
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener el post' });
        }
    },

    async getById (req, res) {
        try {
            const id   = req.params.id;
            const post = await Post.findById(id)
                .populate('user', 'name email');
            if(!post) {
                return res.status(404).json({ error: 'Post no encontrado' });
            }
            res.json(post);
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener el post' });
        }
    },

    async getByType (req, res) {
        try {
            const type  = req.params.type;
            const posts = await Post.find({ type: type })
                .populate('user', 'name email')
                .sort({ createdAt: -1 });
            res.json(posts);
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener los posts' });
        }
    },

    async create (req, res) {
        try {
            const post = await Post.create({
                ...req.body,
                user: req.user.id
            });
            const postPopulated = await post.populate('user', 'name email');
            res.status(201).json(postPopulated)
        } catch(error) {
            console.log(error);
            res.status(400).json({ error: 'Error al crear el post' });
        }
    },

    async update (req, res) {
        try {
            const id   = req.params.id;
            const post = await Post.findByIdAndUpdate(id, req.body, { returnDocument: 'after' })
                .populate('user', 'name email');
            if(!post) {
                return res.status(404).json({ error: 'Post no encontrado' });
            }
            res.json(post);
        } catch(error) {
            console.log(error);
            res.status(400).json({ error: 'Error al actualizar el post' });
        }
    },

    async delete (req, res) {
        try {
            const id   = req.params.id;
            const post = await Post.findByIdAndDelete(id);
            if(!post) {
                return res.status(404).json({ error: 'Post no encontrado' });
            }
            res.json({ message: 'Post eliminado correctamente' });
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: 'Error al intentar eliminar el post' });
        }
    }
};

module.exports = postController;