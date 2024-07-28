CREATE DATABASE MFSN;
USE MFSN;

CREATE USER 'Kaique'@'localhost';

CREATE TABLE usuarios
	(usuarioId INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(256) NOT NULL,
    numero CHAR(14) NOT NULL,	
    senha VARCHAR(30) NOT NULL,
    confirmpassword VARCHAR (30) NOT NULL
);

SELECT * FROM usuarios;