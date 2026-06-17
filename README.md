<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Guia Interativo SQL</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Segoe UI, Arial, sans-serif;
}

body{
    background:#f5f7fa;
    color:#333;
}

header{
    background:linear-gradient(135deg,#0f172a,#1e293b);
    color:white;
    padding:30px;
    text-align:center;
}

header h1{
    margin-bottom:10px;
}

.container{
    max-width:1200px;
    margin:auto;
    padding:20px;
}

.menu{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    justify-content:center;
    margin-bottom:20px;
}

.menu button{
    border:none;
    padding:12px 20px;
    cursor:pointer;
    border-radius:8px;
    color:white;
    font-weight:bold;
    transition:.3s;
}

.menu button:hover{
    transform:scale(1.05);
}

.ddlBtn{background:#2563eb;}
.dmlBtn{background:#16a34a;}
.dclBtn{background:#ea580c;}
.tclBtn{background:#9333ea;}

.card{
    display:none;
    background:white;
    padding:20px;
    border-radius:12px;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
}

.active{
    display:block;
}

table{
    width:100%;
    border-collapse:collapse;
    margin-top:15px;
}

th{
    background:#e2e8f0;
}

th,td{
    border:1px solid #ccc;
    padding:10px;
    text-align:left;
}

pre{
    background:#0f172a;
    color:#f8fafc;
    padding:15px;
    border-radius:8px;
    overflow:auto;
    margin-top:10px;
}

details{
    margin-top:10px;
    border:1px solid #ddd;
    border-radius:8px;
    padding:10px;
}

summary{
    cursor:pointer;
    font-weight:bold;
}

.badge{
    padding:5px 10px;
    border-radius:20px;
    color:white;
    font-size:12px;
}

.ddl{background:#2563eb;}
.dml{background:#16a34a;}
.dcl{background:#ea580c;}
.tcl{background:#9333ea;}
</style>
</head>

<body>

<header>
    <h1>📚 Guia Interativo de SQL</h1>
    <p>DDL • DML • DCL • TCL</p>
</header>

<div class="container">

<div class="menu">
    <button class="ddlBtn" onclick="mostrar('ddl')">DDL</button>
    <button class="dmlBtn" onclick="mostrar('dml')">DML</button>
    <button class="dclBtn" onclick="mostrar('dcl')">DCL</button>
    <button class="tclBtn" onclick="mostrar('tcl')">TCL</button>
</div>

<!-- DDL -->
<div id="ddl" class="card active">

<h2><span class="badge ddl">DDL</span> Data Definition Language</h2>

<p>Comandos para criar, alterar e excluir estruturas do BANCO e das TABELAS.</p>

<table>
<tr>
<th>Comando</th>
<th>Descrição</th>
</tr>

<tr><td>CREATE DATABASE</td><td>Cria um BANCO</td></tr>
<tr><td>CREATE TABLE</td><td>Cria uma TABELA</td></tr>
<tr><td>ALTER TABLE</td><td>Altera uma TABELA</td></tr>
<tr><td>DROP DATABASE</td><td>Remove um BANCO</td></tr>
<tr><td>DROP TABLE</td><td>Remove uma TABELA</td></tr>
<tr><td>TRUNCATE TABLE</td><td>Apaga todos os registros</td></tr>
<tr><td>RENAME TABLE</td><td>Renomeia TABELA</td></tr>
</table>

<details>
<summary>Exemplos DDL</summary>

<pre>
CREATE DATABASE Escola;

CREATE TABLE Alunos(
    Id INT PRIMARY KEY,
    Nome VARCHAR(100)
);

ALTER TABLE Alunos
ADD Email VARCHAR(100);

RENAME TABLE Alunos TO Estudantes;

TRUNCATE TABLE Estudantes;

DROP TABLE Estudantes;

DROP DATABASE Escola;
</pre>

</details>

</div>

<!-- DML -->
<div id="dml" class="card">

<h2><span class="badge dml">DML</span> Data Manipulation Language</h2>

<p>Comandos para inserir, consultar, atualizar e excluir dados.</p>

<table>
<tr>
<th>Comando</th>
<th>Descrição</th>
</tr>

<tr><td>INSERT</td><td>Insere registros</td></tr>
<tr><td>SELECT</td><td>Consulta registros</td></tr>
<tr><td>UPDATE</td><td>Atualiza registros</td></tr>
<tr><td>DELETE</td><td>Remove registros</td></tr>
<tr><td>WHERE</td><td>Filtra registros</td></tr>
<tr><td>ORDER BY</td><td>Ordena resultados</td></tr>
<tr><td>GROUP BY</td><td>Agrupa registros</td></tr>
<tr><td>HAVING</td><td>Filtra grupos</td></tr>
<tr><td>JOIN</td><td>Relaciona TABELAS</td></tr>
<tr><td>DISTINCT</td><td>Remove duplicidades</td></tr>
</table>

<details>
<summary>Exemplos DML</summary>

<pre>
INSERT INTO Alunos
VALUES (1,'João');

SELECT *
FROM Alunos;

SELECT DISTINCT Nome
FROM Alunos;

UPDATE Alunos
SET Nome='João Silva'
WHERE Id=1;

DELETE FROM Alunos
WHERE Id=1;

SELECT Cidade,
COUNT(*)
FROM Alunos
GROUP BY Cidade
HAVING COUNT(*) > 1;

SELECT *
FROM Alunos
ORDER BY Nome;
</pre>

</details>

</div>

<!-- DCL -->
<div id="dcl" class="card">

<h2><span class="badge dcl">DCL</span> Data Control Language</h2>

<p>Comandos para controlar permissões de acesso ao BANCO.</p>

<table>
<tr>
<th>Comando</th>
<th>Descrição</th>
</tr>

<tr><td>GRANT</td><td>Concede permissões</td></tr>
<tr><td>REVOKE</td><td>Remove permissões</td></tr>
</table>

<details>
<summary>Exemplos DCL</summary>

<pre>
GRANT SELECT
ON Escola.Alunos
TO usuario;

GRANT INSERT, UPDATE
ON Escola.Alunos
TO usuario;

REVOKE UPDATE
ON Escola.Alunos
FROM usuario;
</pre>

</details>

</div>

<!-- TCL -->
<div id="tcl" class="card">

<h2><span class="badge tcl">TCL</span> Transaction Control Language</h2>

<p>Comandos para controlar transações.</p>

<table>
<tr>
<th>Comando</th>
<th>Descrição</th>
</tr>

<tr><td>BEGIN</td><td>Inicia transação</td></tr>
<tr><td>COMMIT</td><td>Confirma alterações</td></tr>
<tr><td>ROLLBACK</td><td>Desfaz alterações</td></tr>
<tr><td>SAVEPOINT</td><td>Ponto de restauração</td></tr>
</table>

<details>
<summary>Exemplos TCL</summary>

<pre>
START TRANSACTION;

INSERT INTO Alunos
VALUES (2,'Maria');

SAVEPOINT P1;

UPDATE Alunos
SET Nome='Maria Souza'
WHERE Id=2;

ROLLBACK TO P1;

COMMIT;
</pre>

</details>

</div>

<hr style="margin:30px 0">

<h2>⚙️ Outros Objetos SQL</h2>

<details>
<summary>PROCEDURE</summary>

<pre>
CREATE PROCEDURE ListarAlunos()
BEGIN
    SELECT * FROM Alunos;
END;

CALL ListarAlunos();
</pre>

</details>

<details>
<summary>FUNCTION</summary>

<pre>
CREATE FUNCTION Dobro(valor INT)
RETURNS INT
BEGIN
    RETURN valor * 2;
END;

SELECT Dobro(10);
</pre>

</details>

<details>
<summary>TRIGGER</summary>

<pre>
CREATE TRIGGER trg_insert
AFTER INSERT
ON Alunos
FOR EACH ROW
BEGIN
    INSERT INTO Log
    VALUES (NEW.Nome);
END;
</pre>

</details>

<details>
<summary>VIEW</summary>

<pre>
CREATE VIEW vw_Alunos
AS
SELECT Nome, Cidade
FROM Alunos;

SELECT *
FROM vw_Alunos;
</pre>

</details>

<details>
<summary>INDEX</summary>

<pre>
CREATE INDEX idx_nome
ON Alunos(Nome);
</pre>

</details>

</div>

<script>
function mostrar(id){

document.querySelectorAll('.card')
.forEach(card=>{
    card.classList.remove('active');
});

document.getElementById(id)
.classList.add('active');

}
</script>

</body>
</html>
