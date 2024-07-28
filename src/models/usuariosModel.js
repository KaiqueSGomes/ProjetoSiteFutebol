const database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a const  instrucao 
function cadastrar(firstname, lastname, email, numero, senha, confirmpassword){
    console.log("Acessei o usuário model \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", firstname, lastname, email, numero, senha, confirmpassword);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    const instrucao = `
        INSERT INTO  usuarios (firstname, lastname, email, numero, senha, confirmpassword) VALUES ('${firstname}', '${lastname}', '${email}', '${numero}', '${senha}', '${confirmpassword}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
}