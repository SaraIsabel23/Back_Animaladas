const mongoose = require('mongoose');

const validRole = ['admin', 'user']

const userSchema = new mongoose.Schema({
    name:     {type: String, required: true},
    surnames: {type: String, required: true},
    email:    {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role:     {type: String, enum: validRole, default: 'user'},
    cart:     [{
        product:  {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
        quantity: {type: Number, default: 1 }
    }]
});

module.exports = mongoose.model('User', userSchema);
module.exports.validRole = validRole;
