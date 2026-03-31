// authMiddleware.js: Verifica si el usuario está autenticado y autorizado antes de acceder a ciertas rutas.
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(!token) {
            return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();

    } catch(error) {
        console.log(error);
        res.status(401).json({ error: 'Token inválido' });
    }
};

module.exports = authMiddleware;
