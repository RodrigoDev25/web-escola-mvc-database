const database = require("../config/database")

async function listarTodosCursos() {

    const conexao = await database.conexao
    //desestruturação do resultado da consulta//
    const cursos = await conexao.execute("SELECT * FROM cursos")

    console.log("quantidade de cursos", cursos[0].length)
    
    return cursos[0]
}

module.exports = {
    listarTodosCursos
}