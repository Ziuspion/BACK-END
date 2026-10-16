// =================================================
//  Server.js - Back-end completo
// =================================================

// Parte 1: Importar as ferramentas
const express = require('express');    // biblioteca para criar o servidor
const path = require('path');          // ajuda a montar caminho de pastas
const { DatabaseSync } = require('node:sqlite')        // banco SQLite (já vem dentro do node!)

// Parte 2: Criar o servidor e abrir o banco
const app = express(); // cria o servidor
const banco = new DatabaseSync(path.join(__dirname, 'tarefas.db'));
// abre o banco(se não existir, cria o arquivo). ----------> __dirname = pasta deste arquivo

// Cria a table "tarefas" se ela ainda não existir
banco.exec(`
    Create taable if not exists tarefas(
    id  integer primary key auto increment,
    titulo  text not null,
    concluida   integer defaut 0
    )
`);

// Parte 3: Configurar o servidor (os famosos middlewares)
// app.use: "Todo pedido que chegar, passe primeiro por aqui."

app.use(express.json()); // faz o servidor entender JSON
app.use(express.static(path.join(__dirname, '..', 'public')));
// Entrega a página da pasta "public"

// -----------------------------------------------------
// Parte 4: Rotas (a API)
// -----------------------------------------------------
// Rotas: a combinação do método + endereço
// API: é o conjunto dessas rotas
// 
// Toda rota recebe 2 coisas (SEMPRE NA ORDEM ABAIXO);
// requisição = o PEDIDO que chegou
// resposta  = o que vamos DEVOLVER para o front.
// 
//  Operação | Metodo HTTP | Endereço | Comando SQL
// ---------------------------------------------------
//  Create  | POST        | /tarefas | INSERT 
//  Read    | GET         | /tarefas | SELECT 
//  Update  | PUT         | /tarefas/:id | INSERT
//  Delete  | DELETE      | /tarefas/:id | DELETE

// ==============================================================
// POST /tarefas ---> salvar uma tarefa nova no banco de dados (sqlite)
app.post('/tarfas', (requisição, resposta) =>{
    const titulo = requisição.body.titulo; //texto enviado pela página

    // se o título estiver, vazio, avisa que deu erro (400) e para aqui
    if (!titulo){
        return resposta.status(400).json({erro: 'digite um título'})
    }
    // INSERT: adicionar uma linha na tabela. Lembre-se os "?" são trocados pelo valor do título
    banco.prepare('INSERT INTO tarefas (titulo) VALUES(?)').run(titulo);
    resposta.json({ ok: true}); // Responde que deu certo.
});

// Passo a Passo do que acontece no CREATE
// 1) O usuário digita no campo e clica em "adicionar" no navegador
// 2) O front manda um POST para /tarefas com {"titulo":"..."}
// 3) Chega aqui no server. O express escolhe esta rota porque o metodo POST e o endereço é /tarefas
// 4) "requisição.body.titulo" é o texto que o front mandou, lembrando só funciona por causa doexpress.json() que está lá em cima!
// 5) Validação: se vier vazio, respondemos com status 400(= "pedido errado") em um JSON de erro, NUNCA confie no front, sempre valide aqui.
// 6) Insert em tarefas
// 7) resposta

// ==================== LER ======================
// GET /tarefas -> devolve todas as tarefas
app.get('/tarefas', (requisicao, resposta) => {
    // Select: busca todas as linhas da tabela (as mais novas primeiro)
    const tarefas = banco.prepare('SELECT * FROM tarefas ORDER BY id DESC').all();
    resposta.json(tarefas);
});

// ================== ATUALIZAR ======================
// PUT /tarefas/5 --> muda a tarefa de id 5 (marca como feita ou pendente)
app.put('/tarefas/:id', (requisicao, resposta) =>{
    const id = requisicao.params.id;                    // o número que veio do endereço(o 5)
    const concluida = requisicao.body.concluida;        // 0 ou 1, enviado pela página

    // UPDATE: alterar a linha que tem o ID
    banco.prepare('UPDATE tarefas SET concluida - ? WHERE id = ?').run(concluida, id);
    resposta.json({ ok: true});
})
