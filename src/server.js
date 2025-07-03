const express = require('express')
const app = express()
const port = 5000 

app.set('view engine', "ejs")
app.set("views", "./src/views")

//Importação de Controllers//
const cursoController = require("./controllers/curso-controller")
const professorController = require("./controllers/professor-controller")
const alunoController = require("./controllers/aluno-controller")


//Rotas//
app.get('/cursos', cursoController.listarCursos)
app.post('/cadastrar-curso', cursoController.cadastrarCurso)
app.put('/atualizar-curso', cursoController.atualizarCurso)
app.delete('/deletar-curso', cursoController.deletarCurso)

app.get('/professores', professorController.listarProfessores)
app.post('/cadastrar-professor', professorController.cadastrarProfessor)
app.put('/atualizar-professor', professorController.atualizarProfessor)
app.delete('/deletar-professor', professorController.deletarProfessor)

app.get('/alunos', alunoController.listarAlunos)
app.post('/cadastrar-aluno', alunoController.cadastrarAluno)
app.put('/atualizar-aluno', alunoController.atualizarAluno)
app.delete('/deletar-aluno', alunoController.deletarAluno)



//_______Porta_______//
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})