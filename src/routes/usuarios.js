let express = require("express");
let router = express.Router();

let usuarioController = require("../controllers/usuariosController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

module.exports = router;