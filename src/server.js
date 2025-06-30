const express = require('express')
const app = express()
const port = 5000 

//Importação de Controllers//
const cursoController = require("./controllers/curso-controller")


app.get('/cursos', cursoController.listarCursos )

//_______Porta_______//
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})