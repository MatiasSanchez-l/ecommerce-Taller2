const { Router } = require("express");
const router = Router();
var authMiddleware = require('../Middleware/AuthMiddleware');
const { getProductos, crearProducto, getProductoPorId, borrarProducto, modificarProducto } = require('../controllers/productos.controller');

router.route("")
    .get(getProductos);     
    
router.route("/:id")
    .get(getProductoPorId);    

router.route("")
    .post(authMiddleware.Validar ,crearProducto);

router.route("")
    .put(authMiddleware.Validar ,modificarProducto);

router.route("/:id")
    .delete(authMiddleware.Validar ,borrarProducto);

module.exports = router;