CREATE DATABASE sistema_escola;
USE sistema_escola;

show tables;

/*__________________________>>-TABELAS-<<__________________________*/

CREATE TABLE cursos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  carga_horaria INT,
  escolaridade_requirida VARCHAR(100)
);
SELECT * FROM cursos;

INSERT INTO 
cursos (nome, carga_horaria, escolaridade_requirida)
VALUES
("Técnico em informática", 1200, "Ensino Médio")

/*_______________________________________________________*/

CREATE TABLE professores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  salario NUMERIC,
  avaliacao INT
);
SELECT * FROM professores;

/*_______________________________________________________*/

CREATE TABLE alunos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255),
  ra VARCHAR(20),
  data_nascimento date
);
SELECT * FROM alunos;

