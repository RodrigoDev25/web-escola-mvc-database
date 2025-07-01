function listarProfessores(req, res) {
    res.send("Função controller responsável pela listagem dos professores")
}

function cadastrarProfessor(req, res) {
    res.send("Função controller responsável pelo cadastro de professores")
}

function atualizarProfessor(req, res) {
    res.send("Função controller responsável por atualizar professor")
}

function deletarProfessor(req, res) {
    res.send("Função controller responsável por deletar professores")
}

//___Exportação de Funções___//
module.exports = { 
    listarProfessores,
    cadastrarProfessor,
    atualizarProfessor,
    deletarProfessor
}