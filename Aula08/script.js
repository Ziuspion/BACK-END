// ===============================================================
// API de cachorros
// ===============================================================

// Endereço da API que vamos utilizar
const url = 'https://dog.ceo/api/breeds/image/random'

// Pegando os elementos do HTML

// - Imagem pelo seu ID
const fotoCachorro = document.getElementById('fotoCachorro')

// - Botão pelo seu ID
const btnNovaFoto = document.getElementById('btnNovaFoto')

// ============================================
// Função para buscar uma nova foto
// ============================================

async function buscarFoto() {
    // Fazer uma requisição para a API
    const resposta = await fetch(url);
    // Converter a resposta da API para JSON
    const dados = await resposta.json()
    // Mostrar no console o que a API retornou
    console.log(dados)
    // Alteramos o endereço da imagem no HTML
    fotoCachorro.src = dados.message;
}

// ===================================================
// Botão
// ===================================================
// Quando o usuário clicar no botão
// Vamos executar a função buscarfoto()
btnNovaFoto.addEventListener('click', buscarFoto);

// Quando a página abrir,
// Já buscamos uma foto automaticamente
buscarFoto();