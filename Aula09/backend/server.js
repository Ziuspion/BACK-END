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
const cachorros = require("./data/dogs.json");
const { log } = require("console");
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

// =====================================
// Rotas da API
// =====================================

// Rota 1 - Cachorro aleatório
app.get("/api/cachorros/aleatorio", (req, res) => {
// req - request(requisição) - é o pedido que chega ao servidor, por exemplo, o navegador pede uma foto de cachorro
// res - response(resposta) - é o que o servidor envia de volta, por exemplo, o endereço da foto do cachorro

// pegar todas as fotos de todas as raças
// object.values pega os valores do objeto
// flat transforma tudo em um único array 
const todasAsFotos = Object.values(cachorros).flat();

// sorteia uma foto aleatória
const item = sortear(todasAsFotos)

// responder para o cliente em formato JSON
res.json({
    // status da resposta
    status: "success",
    // URL da imagem que foi sorteada
    message: `http://localhost:$(PORT)/fotos/$(item)`
});
});
// Rota 2 - Cachorro por raça
// exemplo de acesso:
// http://localhost:3000/api/cachorros/husky

app.get("/api/cachorros/:raca", (req, res) => {

    // pega o parametro da URL (ex: husky)
    const raca = req.params.raca.toLocaleLowerCase();
    // params = contem os parâmetros definidos na URL na rota
    // .raca = acessa o parâmetro chamado raca.
    // toLocaleLowerCase() = transforma todas as teclas em minúsculas
    if (!cachorros[raca]){
    // cachorros[raca]: procurar a raça dentro do objeto *cachorros*
    // !: significa não: Nesse caso, verifica se a raça não existe ou se o valor é falso
        // se não existir, retorna erro 404
        res.status(404).json({
            status: "error",
            message: `Raça "$(raca)" não encontrada`
        });

        // encerra a execução da rota
        return;
    }

    // sortear uma foto da raça solicitada
    const item = sortear(cachorros[raca]);

    // retorna a reposta no JSON
    res.json({
        status: "success",
        message: `http://localhost:$(PORT)/fotos/$(item)`
    });
});

// ==================================================
// Inicia o servidor
// ==================================================

// inicia o servidor express
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:$(PORT)`);
    console.log(`Coloque as fotos manualmente em: data/fotos/`);
    
})
