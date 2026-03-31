const express = require('express');
const router  = express.Router();
const productController = require('../controllers/productController');
const authMiddleware    = require('../middlewares/authMiddleware');
const adminMiddleware   = require('../middlewares/adminMiddleware');


//RUTAS PÚBLICAS
router.get("/", productController.getAll);

router.get("/:id", productController.getById);

//RUTAS PROTEGIDAS
router.post("/", authMiddleware, adminMiddleware, productController.create);

router.put("/:id", authMiddleware, adminMiddleware, productController.update);

router.delete("/:id", authMiddleware, adminMiddleware, productController.delete);

module.exports = router;
