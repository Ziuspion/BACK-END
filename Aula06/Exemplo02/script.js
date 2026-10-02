// -----------------------------------------------
// SELECIONANDO ELEMENTOS DO DOM
// -----------------------------------------------

// Selecionando por ID
// console.log(document.getElementById("titulo"));
// Para visualização no console

let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste");


// Selecionado por classe
let caixas = document.getElementsByClassName("box");

// Mostrar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagem);

// -------------------------------------------------------------------------
// FUNÇÃO PARA ALTERAR CONTEÚDO
// -------------------------------------------------------------------------

function alterar(){
    titulo.innerHTML="Bem vindo a era das máquinas!";
    subtitulo.innerHTML="Valdir";
    paragrafo.innerHTML="melhor podcast de todos"

// Alterando elemento da classe
caixas[0].innerHTML = "Primeiro"
caixas[1].innerHTML = "Segundo"

// Alterando imagen
imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDn0kmSHo4W21diXMWhE4RJmzjZyea8aB1FYWP48VOg&s=10"
}