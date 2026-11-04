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

// ================================
// Bloco 03: Deixando o tempo bonito (MM:SS)
// ================================

function formatar(total){
    // math.floor arredonda para baixo, sempre retorna um número inteiro
    // exemplo: 65/60 = 1.08333... -> math.floor joga fora a parte decimal -> 1
    const min = Math.floor(total / 60);

    // o sinal de % retorna o resto da divisão
    const seg = total % 60;

    // String (...) transforma um número em texto
    // padStart(2, '0') garante que o número tenha pelo menos 2 dígitos, preenchendo com zeros à esquerda se necessário
    // Assim "5" vora "05", depois nós juntamos os pedaços com o ":"
    return min.toString().padStart(2, '0') + ':' + String(seg).padStart(2, '0');
}

// ==========================================
// Bloco 04: o ❤️ do programa
// ==========================================

    // setinterval = "repita isso a cada X milissegundos"
    // 1000 milissegundos = 1 segundo (veja o numero no final do bloco)
    setInterval(() => {
        if (rodando) {
            // Soma 1 em tempo. É o mesmo que: tempo = tempo + 1
            tempo ++;
            // limpa a tela para o número "mudar no mesmo lugar"
            console.clear();
            console.log('⏱️' +formatar(tempo));
        }
    }, 1000);

    // ==========================================
    // Bloco 05: Ouvindo o teclado
    // ==========================================