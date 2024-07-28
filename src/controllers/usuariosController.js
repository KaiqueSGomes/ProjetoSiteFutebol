let usuariosModel = require("../models/usuariosModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    let firstname = req.body.firstNameServer;
    let lastname = req.body.lastNameServer;
    let email = req.body.emailServer;
    let numero = req.body.numberServer;
    let senha = req.body.passwordServer;
    let confirmpassword = req.body.confirmPasswordServer;

    // Faça as validações dos valores
    if (firstname == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if(lastname == undefined){
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu número está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (confirmpassword == undefined) {
        res.status(400).send("Sua confirmação de senha está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuariosModel.cadastrar(firstname, lastname, email, numero, senha, confirmpassword)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    cadastrar
}