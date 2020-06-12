CREATE DATABASE crud;

USE crud;

CREATE TABLE produto(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    descricao VARCHAR(255)
);

SELECT * FROM produto;

INSERT INTO produto SET nome = 'Suco', preco = 2.50, id = '2', descricao = 'Suco de uva';

INSERT INTO produto (id, nome, preco, descricao) VALUES (1, 'Feijão', 9.99, '');