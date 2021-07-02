const { Router } = require("express");
const router = Router();
var authMiddleware = require('../Middleware/AuthMiddleware');
const { registrarUsuario, loguearUsuario, desloguearUsuario } = require('../controllers/usuarios.controller');

router.route("/registrar")
    .post(registrarUsuario);

router.route("/loguear")
    .post(loguearUsuario);

router.route("/desloguear")
    .post(authMiddleware.Validar ,desloguearUsuario);

module.exports = router;