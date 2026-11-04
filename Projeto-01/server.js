// Cronômetro no terminal

// =================================
// Bloco 01: Preparando o terminal
// =================================
// require = "traga para cá uma ferramenta pronta!"
// readline = "´é a ferramenta do Node que sabe conversar com o teclado"
const readline = require('readline')

// process.stdin = a entrada do programa (teclado)
// Esta linha manda o Node avisar o programa toda vez que uma tecla for apertada
readline.emitKeypressEvents(process.stdin)

process.stdin.setRawMode(true)

// Mensagem de boas-vindas
console.log('Bem-vindo ao cronômetro! Pressione ESPAÇO para iniciar/parar o cronômetro.');
console.log('p = pausar/continuar | r = resetar | Cntrl + C = sair')

// ================================
// Bloco 02: memória do cronômetro
// ================================
// tempo guarda quantos segundos passaram.
let tempo = 0;

// rodando é um interruptor de luz: true = ligado, false = desligado
let rodando = true;