
const adminMiddleware = (req, res, next) => {
    try {
        if(req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Acceso denegado. Se requiere rol de administrador' });
        }

        next();
    } catch(error) {
        console.log(error);
        res.status(403).json({ error: 'Error al verificar permisos' });
    }
};

module.exports = adminMiddleware;
