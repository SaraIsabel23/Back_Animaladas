const express = require('express');
const router   = express.Router();
const articleController = require('../controllers/articleController');

//RUTAS PÚBLICAS
router.get("/", articleController.getAll);

router.get("/:id", articleController.getById);

//RUTAS PROTEGIDAS- aplicar authMiddleware cuando lo creemos
router.post("/", articleController.create);

router.put("/:id", articleController.update);

router.delete("/:id", articleController.delete);

module.exports = router;

