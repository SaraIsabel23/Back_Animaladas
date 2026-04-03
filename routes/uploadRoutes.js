const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadCloudinary');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No se ha subido ninguna imagen' });
        }

        res.status(200).json({
            url: req.file.path,
            public_id: req.file.filename
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al subir la imagen' });
    }
});

module.exports = router;