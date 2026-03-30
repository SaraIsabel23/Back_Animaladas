const Product = require('../models/Product');
const { subcategoriesByCategory } = require('../models/Product');

const productController = {
    async getAll (req, res) {
        try{
            const products = await Product.find();
            res.json(products)
        } catch(error) {
            console.log(error)
            res.status(500).json({ error: 'Error al obtener productos' });
        }
    },
    async getById (req, res) {
        try{
            const id = req.params.id;
            const product = await Product.findById(id);
            if(!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });              
            }
            res.json(product)
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener el producto' });
        }
    },
    async create (req, res) {
        try{
            const { category, subcategory } = req.body;

            if(!subcategoriesByCategory[category]) {
                return res.status(400).json({ error: 'Categoria no valida' });
            }
            if(!subcategoriesByCategory[category].includes(subcategory)) {
                return res.status(400).json({ error: `La subcategoria "${subcategory}" no es valida para la categoria "${category}"` });
            }

            const product = await Product.create(req.body);
            res.status(201).json(product)
        } catch(error) {
            console.log(error);
            res.status(400).json({ error: 'Error al crear el producto' });
        }
    },
    async update (req, res) {
        try {
            const id = req.params.id;
            const { category, subcategory } = req.body;

            if(category || subcategory) {
                const existingProduct = await Product.findById(id);
                if(!existingProduct) {
                    return res.status(404).json({ error: 'Producto no encontrado' });
                }
                
                const finalCategory    = category || existingProduct.category;
                const finalSubcategory = subcategory || existingProduct.subcategory;

                if(!subcategoriesByCategory[finalCategory]) {
                    return res.status(400).json({ error: 'Categoria no valida' });
                }
                if(!subcategoriesByCategory[finalCategory].includes(finalSubcategory)) {
                    return res.status(400).json({ error: `La subcategoria "${finalSubcategory}" no es valida para la categoria "${finalCategory}"` });
                }
            }
            
            const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
            if(!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json(product);
        } catch(error) {
            console.log(error);
            res.status(400).json({ error: 'Error al actualizar el producto' });
        }
    },
    async delete (req, res) {
        try {
            const id = req.params.id;
            const product = await Product.findByIdAndDelete(id);
            if(!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json({ message: 'Producto eliminado correctamente' });
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: 'Error al eliminar el producto' });
        }
    }
};


module.exports = productController;