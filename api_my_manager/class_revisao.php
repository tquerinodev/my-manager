<?php
// Definindo os cabeçalhos para permitir acesso e responder em JSON
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

// Incluir o arquivo de conexão com o banco de dados
require_once 'db.php';

// Criando uma instância da classe Database para conexão com o banco de dados
$database = new Database();
$db = $database->connect();

class Revisao {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function insertData($titulo, $disciplina) {
        // Validação simples dos dados (garanta que os dados estão presentes)
        if (!empty($titulo) && !empty($disciplina)) {
            // Preparando a query SQL
            $stmt = $this->conn->prepare("INSERT INTO tb_revisao (rev_titulo, rev_disciplina) VALUES (?, ?)");
            $stmt->bind_param("ss", $titulo, $disciplina);

            // Executando a query
            if ($stmt->execute()) {
                return ['message' => 'Registro inserido com sucesso'];
            } else {
                return ['message' => 'Erro ao inserir registro'];
            }

            // Fechando a statement
            $stmt->close();
        } else {
            // Resposta caso algum dado não esteja presente
            return ['message' => 'Dados incompletos'];
        }
    }
}

// Criando uma instância da classe Revisao
$revisao = new Revisao($db);

// Obtendo os dados postados
$data = json_decode(file_get_contents("php://input"));

// Verificando se o método de solicitação é POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($data->titulo) && !empty($data->disciplina)) {
        // Chamando o método insertData da classe Revisao
        $response = $revisao->insertData($data->titulo, $data->disciplina);
        echo json_encode($response);
    } else {
        echo json_encode(['message' => 'Dados incompletos']);
    }
}

// Fechando a conexão com o banco de dados
$database->close();
?>
