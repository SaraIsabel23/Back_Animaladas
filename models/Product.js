const mongoose = require('mongoose');

const validCategory = ['Perros', 'Gatos', 'Pajaros', 'Roedores', 'Tortugas', 'Peces'];
const subcategoriesByCategory = {
    Perros:   ['Alimentacion', 'Snacks', 'Juguetes', 'Higiene', 'Antiparasitarios', 'Camas', 'Paseo', 'Complementos'],
    Gatos:    ['Alimentacion', 'Snacks', 'Juguetes', 'Higiene', 'Antiparasitarios', 'Camas', 'Arenas', 'Complementos'],
    Pajaros:  ['Alimentacion', 'Snacks', 'Jaulas', 'Higiene', 'Complementos'],
    Roedores: ['Alimentacion', 'Snacks', 'Jaulas', 'Higiene', 'Complementos'],
    Tortugas: ['Alimentacion', 'Tortugueras', 'Complementos'],
    Peces:    ['Alimentacion', 'Acuarios', 'Complementos']
};

const allSubcategories = [...new Set(Object.values(subcategoriesByCategory).flat())];

const productSchema = new mongoose.Schema({
    name:         {type: String, required: true},
    description:  {type: String, required: true},
    category:     {type: String, enum: validCategory, required: true},
    subcategory:  {type: String, enum: allSubcategories, required: true},
    price:        {type: Number, required: true, min: 0},
    size:         {type: String},
    image:        {type: String, default: ''},
    stock:        {type: Number, default: 0, min: 0},
    featured:     {type: Boolean, default: false},

});

module.exports = mongoose.model('Product', productSchema);
module.exports.validCategory    = validCategory;
module.exports.subcategoriesByCategory = subcategoriesByCategory;


