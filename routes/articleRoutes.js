const express = require('express');
const router   = express.Router();
const articleController = require('../controllers/articleController');
const authMiddleware    = require('../middlewares/authMiddleware');
const adminMiddleware   = require('../middlewares/adminMiddleware');

//RUTAS PÚBLICAS
router.get("/", articleController.getAll);

router.get("/:id", articleController.getById);

//RUTAS PROTEGIDAS
router.post("/", authMiddleware, adminMiddleware, articleController.create);

router.put("/:id", authMiddleware, adminMiddleware, articleController.update);

router.delete("/:id", authMiddleware, adminMiddleware, articleController.delete);

module.exports = router;

