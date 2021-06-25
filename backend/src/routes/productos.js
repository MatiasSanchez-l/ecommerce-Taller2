const { Router } = require("express");
const router = Router();
const { getProductos, crearOModificarProducto, getProductoPorId, borrarProducto } = require('../controllers/productos.controller');

router.route("")
    .get(getProductos);

router.route("/:id")
    .get(getProductoPorId);    

router.route("")
    .post(crearOModificarProducto);

router.route("/:id")
    .delete(borrarProducto);

module.exports = router;