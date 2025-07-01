function listarAlunos(req, res) {
    res.send("Função controller responsável pela listagem dos alunos")
}

function cadastrarAluno(req, res) {
    res.send("Função controller responsável pelo cadastro de alunos")
}

function atualizarAluno(req, res) {
    res.send("Função controller responsável por atualizar alunos")
}

function deletarAluno(req, res) {
    res.send("Função controller responsável por deletar alunos")
}

//___Exportação de Funções___//
module.exports = { 
    listarAlunos,
    cadastrarAluno,
    atualizarAluno,
    deletarAluno
}