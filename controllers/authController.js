const User   = require('../models/User');
const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');


const authController = {
    async register (req, res) {
        try {
            const { name, surnames, email, password } = req.body;
            if(!name || !surnames || !email || ! password) {
                return res.status(400).json({ error: 'Todos los campos son obligatorios' });
            }

            const existingUser = await User.findOne({ email: email });
            if(existingUser) {
                return res.status(400).json({ error: 'El email ya está registrado' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                name,
                surnames,
                email,
                password: hashedPassword
            });

            const token = jwt.sign(
                { id: user._id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
            );

            res.status(201).json({
                message: 'Usuario registrado correctamente',
                token,
                user: {
                    id:       user.id,
                    name:     user.name,
                    surnames: user.surnames,
                    email:    user.email,
                    role:     user.role
                }
            });

        } catch(error) {
            console.log(error);
            res.status(500).json({ error: 'Error en el registro' });
        }
    },
    async login (req, res) {
        try {
            const { email, password } = req.body;
            if(!email || !password) {
                return res.status(400).json({ error: 'Todos los campos son obligatorios' });
            }

            const user = await User.findOne({ email: email });
            if(!user) {
                return res.status(400).json({ error: 'Credenciales incorrectas' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) {
                return res.status(400).json({ error: 'Credenciales incorrectas' });
            }

            const token = jwt.sign(
                { id: user._id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );
            res.json({
                message: 'Login correcto',
                token,
                user: {
                    id:       user._id,
                    name:     user.name,
                    surnames: user.surnames,
                    email:    user.email,
                    role:     user.role
                }
            });
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: 'Error en el login' });
        }
    }
};

module.exports = authController;

