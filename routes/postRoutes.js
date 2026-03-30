const express = require('express');
const router  = express.Router();
const postController = require('../controllers/postController');

//RUTAS PÚBLICAS
router.get("/", postController.getAll);

router.get("/type/:type", postController.getByType);

router.get("/:id", postController.getById);

//RUTAS PROTEGIDAS- aplicar authMiddleware cuando lo creemos.
router.post("/", postController.create);

router.put("/:id", postController.update);

router.delete("/:id", postController.delete);

module.exports = router;

