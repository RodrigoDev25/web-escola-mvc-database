const cursoModel = require("../models/curso-model")

async function listarCursos(req, res) {
const listarTodosCursoss = await cursoModel.listarTodosCursos()
res.json(
    listarTodosCursoss)
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
//__________________________________________________________________________//



//__________________________________________________________________________//
//___Exportação de Funções___//
module.exports = {
    listarCursos,
    cadastrarCurso,
    atualizarCurso,
    deletarCurso
}