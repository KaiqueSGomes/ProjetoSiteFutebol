const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuariosController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

module.exports = router;