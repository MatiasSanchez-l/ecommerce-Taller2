const { Router } = require("express");
const router = Router();
var authMiddleware = require('../Middleware/AuthMiddleware');
const { getProductos, crearOModificarProducto, getProductoPorId, borrarProducto } = require('../controllers/productos.controller');

router.route("")
    .get(getProductos);

router.route("/:id")
    .get(getProductoPorId);    

router.route("")
    .post(authMiddleware.Validar ,crearOModificarProducto);

router.route("/:id")
    .delete(authMiddleware.Validar ,borrarProducto);

module.exports = router;