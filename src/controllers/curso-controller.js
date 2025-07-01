function listarCursos(req, res) {
    res.send("Função controller responsável pela listagem dos cursos")
}

function cadastrarCurso(req, res) {
    res.send("Função controller responsável pelo cadastro de cursos")
}

function atualizarCurso(req, res) {
    res.send("Função controller responsável por atualizar curso")
}

function deletarCurso(req, res) {
    res.send("Função controller responsável por deletar cursos")
}

//___Exportação de Funções___//
module.exports = { 
    listarCursos,
    cadastrarCurso,
    atualizarCurso,
    deletarCurso
}