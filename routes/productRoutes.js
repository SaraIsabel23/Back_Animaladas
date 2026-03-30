const express = require('express');
const router  = express.Router();
const productController = require('../controllers/productController');
//const authMiddleware    = require('../middlewares/authMiddleware');


//RUTAS PÚBLICAS
router.get("/", productController.getAll);

router.get("/:id", productController.getById);

//RUTAS PROTEGIDAS- aplicar authMiddleware cuando lo creemos.
router.post("/", productController.create);

router.put("/:id", productController.update);

router.delete("/:id", productController.delete);

module.exports = router;
