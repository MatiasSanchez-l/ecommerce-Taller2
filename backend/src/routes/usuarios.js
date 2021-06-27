const { Router } = require("express");
const router = Router();
var authMiddleware = require('../Middleware/AuthMiddleware');
const { registrarUsuario, loguearUsuario, validar, desloguearUsuario } = require('../controllers/usuarios.controller');

router.route("/registrar")
    .post(registrarUsuario);

router.route("/loguear")
    .post(loguearUsuario);

router.route("/desloguear")
    .post(authMiddleware.Validar ,desloguearUsuario);

router.route("/validar")
    .post(validar);

module.exports = router;