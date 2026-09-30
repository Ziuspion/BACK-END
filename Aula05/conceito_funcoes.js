// Funções em JavaScript

// o que é uma função?
// Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica.

// Analogia SIMPLES!!!
// Você vai colocar valores (Parâmetros)
// Ela processa
// Devolve um resultado (Return)

//----------------------------------------------------------------------------------------------------
// Estrutura básica de uma função
//----------------------------------------------------------------------------------------------------

// function nomeDaFuncao(parametro1, parametro2) {
//     // Código que será executado
// return resultado;
// }

// function --> palavra-chave
// nomeDaFuncao --> nome da função
// parâmetros --> valores que a função recebe
// return --> valor que a função devolve

// 5 exemplos

// 1° - Somar dois números

function somar(a, b) {
    return a + b;
}
console.log(somar(5, 5))

// 2° - Converter real para dólar
function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao;
}
console.log(realParaDolar(10, 5.20). toFixed(2));

// 3° - Coverter dólar para real
function dolarParaReal(valorDolar, cotacao){
    return valorDolar * cotacao;
}
console.log(dolarParaReal(0.50, 5.20).toFixed(2));

// 4° - Aumento de salário (Você merece 25% de aumento)
function aumentoS(atual, porcentagem){
    return atual * porcentagem;
}
console.log(aumentoS(1500, 1.25));

// 5° - Verifique se é par ou impar?
function parimpar(n) {
    if (n % 2 === 0) {
        return "O numero é par";
    } else {
        return "O numero é impar";
    }
}
console.log(parimpar(4));
console.log(parimpar(5));

