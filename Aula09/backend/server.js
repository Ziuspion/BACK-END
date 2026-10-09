// =============================================
// Nossa API de cachorros
// =============================================
// 
// Agora as fotos NÃO são mais baixadas automáticamente
// Elas DEVEM existir manualmente na pasta
// data/fotos
// =============================================

// Rotas:
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// Importar o framework Express para criar o servidor
const express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// Importar o módulo de arquivos do NODE
const fs = require("fs")
// Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json")
// cria a aplicação Express
const app = express();
// definir a porta onde o servidor vai funcionar
const PORT = 3000;
// Habilitar o uso do CORS na aplicação 
app.use(cors());

// ============================================================
// Servir arquivos estáticos
// ============================================================

// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// http://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") // Caminho real da pasta do servidor
    )
)

// ============================================================
// Função auciliar
// ============================================================

// Função que recebe um array e retorna um item aleatório dele
function sortear(array) {
    // gera um número aleátorio entre 0 e o tamanho do array
    // array.length - Conta quantos itens existem na lista
    // Math.random() - Sorteia um número decimal entre 0 e 1
    // Math.random() * array.length - Multiplica o número sorteado pela quantidade de itens
    // Math.floor() - Tira a parte decimal, arrendodando para baixo
    const i = Math.floor(Math.random() * array.length)
    // const i = Guarda a posição na variável i
    // retorna o item sorteado
    return array[i];
}