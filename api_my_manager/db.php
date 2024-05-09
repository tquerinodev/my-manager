<?php
// db_connection.php

$host = '127.0.0.1:3306';
$dbname = 'u848683652_missaodelta';
$username = 'u848683652_tquerinowork';
$password = 'Que012721rino!';

// Criando a conexão
$conn = new mysqli($host, $username, $password, $dbname);

// Checando a conexão
if ($conn->connect_error) {
    die(json_encode(['message' => 'Falha na conexão com o banco de dados: ' . $conn->connect_error]));
}
?>