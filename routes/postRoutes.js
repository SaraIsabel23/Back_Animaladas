const express = require('express');
const router  = express.Router();
const postController = require('../controllers/postController');
const authMiddleware    = require('../middlewares/authMiddleware');
const adminMiddleware   = require('../middlewares/adminMiddleware');

//RUTAS PÚBLICAS
router.get("/", postController.getAll);

router.get("/type/:type", postController.getByType);

router.get("/:id", postController.getById);

//RUTAS PROTEGIDAS
router.post("/", authMiddleware, postController.create);

router.put("/:id", authMiddleware, adminMiddleware, postController.update);

router.delete("/:id", authMiddleware, adminMiddleware, postController.delete);

module.exports = router;

