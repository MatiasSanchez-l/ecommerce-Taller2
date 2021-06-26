const { Router } = require("express");
const router = Router();
const { registrarUsuario } = require('../controllers/usuarios.controller');

router.route("")
    .post(registrarUsuario);
/*
router.route("")
    .post(loguearUsuario); */  

module.exports = router;