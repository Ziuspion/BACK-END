/*
=====================================================
  Front-end  - consome nossa API local
=====================================================

Este arquivo roda no navegador.
Ele faz requisições para nossa API Node.js
e mostra os dados na tela
*/

// ==========================
// Elementos do HTML
// ==========================
// foto do cachorro
// IMPORTANTE: o nome da variável precisa ser escrito sempre igual (dogImage)
const dogImage = document.getElementById("dogImage");
// nome raça
const breedName = document.getElementById("breedName");
// cachorro aleatório
const randomBtn = document.getElementById("randomBtn");
// botão que busca cachorro por raça
const searchBtn = document.getElementById("searchBtn");
// campo de texto onde o usuário digita a raça
const breedInput = document.getElementById("breedInput");
// área onde fica a imagem do cachorro
// usamos querySelector porque é uma classe(.dog-area)
const dogArea = document.querySelector(".dog-area");

// ==================================
// URL da API
// ==================================

const API = "http://localhost:3000/api/cachorros";

// ==================================
// Função Principal
// ==================================

async function buscarCachorro(url) {
  // adiciona a classe "loading"
  // normalmente usada para mostrar animação de carregamento
  dogArea.classList.add("loading");

  try {
    // faz requisição HTTP para a API
    const response = await fetch(url);
    // converte a resposta para JSON
    const data = await response.json();
    // mostra no console a resposta da API
    console.log("Resposta da API: ", data);
    // Vamos verificar se a API retornou o erro
    if (data.status === "error") {
      // Mostra a mensagem de erro na tela
      // breedName - Elemento HTML
      // .textContent - Propriedade que define o texto do elemento
      // data - Objeto com os dados recebidos da API
      // .message - Propriedade que contém a mensagem ou URL
      breedName.textContent = data.message;
      // remove a imagem
      dogImage.src = "";
      // encerra a função
      return;
    }

    // coloca a imagem do cachorro na tela
    // o src define qual imagem será exibida
    dogImage.src = data.message;

    // extrai o nome da raça da URL da imagem
    // exemplo da URL:
    // http://localhost:3000/fotos/husky/1.jpg

    // separa a URL em partes usando "/"
    // ["http:", "", "localhost:3000", "fotos", "husky", "1.jpg"]
    //     0      1         2            3        4         5
    const partes = data.message.split("/");

    // pega a posição 4 do array
    // que corresponde ao nome da raça
    const raca = partes[4];

    // coloca a primeira letra maiúscula
    // ex: husky --> Husky
    breedName.textContent =
      // raca.charAt(0) - pega a primeira letra
      // .toUpperCase() - transforma em maiúscula
      // raca.slice(1) - pega o texto a partir da segunda letra
      raca.charAt(0).toUpperCase() + raca.slice(1);

  } catch (erro) {
    // caso o servidor esteja desligado
    // ou aconteça algum erro na requisição

    console.error(erro);

    // mostra mensagem na tela
    breedName.textContent =
      "servidor offline - rode: node server.js";

    // remove a imagem
    dogImage.src = "";
  } finally {
    // remove a classe de carregamento
    // independentemente de erro ou sucesso
    dogArea.classList.remove("loading");
  }
}

// =============================================
// Ações
// =============================================

// Função que busca o cachorro aleatório
function cachorroAleatorio() {
  // Chamar a função principal
  // passando a rota /aleatorio da API
  // IMPORTANTE: template string usa ${variavel}
  buscarCachorro(`${API}/aleatorio`);
}

// Função que busca cachorro por raça
function buscarPorRaca() {
  // Pegar o texto digitado no input
  // trim() remove os espaços em branco do início e do fim do texto.
  const raca = breedInput.value.trim().toLowerCase();

  // Verificar se o usuário digitou algo
  if (!raca) {
    // Se não digitou, mostra alerta
    alert("Digite uma raça!");
    // Interrompe a função
    return;
  }

  // Chamar a API passando a raça na URL
  // Exemplo: /api/cachorros/husky
  buscarCachorro(`${API}/${raca}`);
}

// ===================================================
// Eventos
// ===================================================

// Quando clicar no botão "aleatório"
randomBtn.addEventListener("click", cachorroAleatorio);

// Quando clicar no botão "buscar"
searchBtn.addEventListener("click", buscarPorRaca);

// Quando clicar na imagem do cachorro
// Carrega outro cachorro aleatório
dogImage.addEventListener("click", cachorroAleatorio);

// Quando o usuário apertar o ENTER no input
breedInput.addEventListener("keypress", (event) => {
  // Verifica se a tecla pressionada foi enter
  if (event.key === "Enter") {
    // executa a busca por raça
    buscarPorRaca();
  }
});

// Carrega ao abrir a página
cachorroAleatorio();