const { Router } = require("express");
const router = Router();
const { registrarUsuario, loguearUsuario, validar, desloguearUsuario } = require('../controllers/usuarios.controller');

router.route("/registrar")
    .post(registrarUsuario);

router.route("/loguear")
    .post(loguearUsuario);

router.route("/desloguear")
    .post(desloguearUsuario);

router.route("/validar")
    .post(validar);

module.exports = router;