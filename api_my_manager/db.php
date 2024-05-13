<?php
class Database {
    private $conn;

    public function __construct() {
        $this->conn = new mysqli('93.127.212.158', 'flas_admin', 'Que012721rino#', 'flas_my_manager');
        if ($this->conn->connect_error) {
            die("Falha na conexão: " . $this->conn->connect_error);
        }
    }

    public function connect() {
        return $this->conn;
    }

    public function close() {
        $this->conn->close();
    }
}
