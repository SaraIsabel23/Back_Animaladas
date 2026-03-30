// authMiddleware.js: Verifica si el usuario está autenticado y autorizado antes de acceder a ciertas rutas.

const authMiddleware = (req, res, next) => {
    if (req.session.isAdmin) {
        next();
    } else {
        res.redirect('/auth/login');
    }
};

module.exports = authMiddleware;
