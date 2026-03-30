const mongoose = require('mongoose');

const validType    = ['Perdido', 'Encontrado', 'Adopcion']
const validContact = ['Telefono', 'Email']

const postSchema = new mongoose.Schema({
    title:       {type: String, required: true},
    description: {type: String, required: true},
    type:        {type: String, enum: validType, required: true},
    image:       {type: String, default: '' },
    contact:     {
           kind:  {type: String, enum: validContact, required: true},
           value: {type: String, required: true}
        },
    user:        {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
module.exports.validType    = validType;
module.exports.validContact = validContact;

