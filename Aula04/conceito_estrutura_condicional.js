// Estrutura Condicionais (Tomando Decisões)
// As estruturas condicionais permiteem executar diferentes blocos de código dependendo de uma conddição

// if/else - Condicionais
// If - verifica se uma condição é verdadeira e executa o código dentro dele, se a condição for falsa, o else pode executar o bloco de código

let idade = 115
if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade");
    
}

// IF, ELSE IF, ELSE (Multiplas Condições
let idade2 = 16;

if (idade2 < 12){
    console.log("Você é uma criança 🍸");
} else if (idade2 < 18 ) {
    console.log("Você é um adolescente 🤦‍♂️")
} else {
    console.log("Você é um adulto 🍻");
    
}