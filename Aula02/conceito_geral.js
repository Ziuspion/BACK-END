// Inicio Backend  -JavaScript

// Variáveis

//Antigo!!!!!!!!!!!!!!!!!!!!!, pode ser redeclarado e mudar o valor
var idade = 10
var idade = 20 // não gera erro, mas à substitui o valor da primeira variável idade e continua com duas variáveis apesar de uma ter substituido a outra

// Mais moderno, pode mudar o valor, mas não pode ser redeclarado
let nome = "Julia"
nome = "Dafny"; // permitido, substitui mas não gera erro, pois a variável já foi declarada e pode ser alterada

// let nome = "jose"; // não permitido, gera erro, pois a variável já foi declarada

const pi = 3.14;
// pi = 40; // não permitido, gera erro, pois a variável é constante e não pode ser alterada