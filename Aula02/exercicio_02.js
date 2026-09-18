// String 

let meuNome = "Orlando";
    console.log("Seu nome é : " + meuNome);

let meuSobrenome = "Brito";
    console.log("Seu sobrenome é: " + meuSobrenome);

let frase = `Olá, Mundo! ${10}`;
    console.log(frase);

let nomeEscola = "Senai";
    console.log("O nome da escola é: " + nomeEscola);

    console.log("Olá meu nome é: " + meuNome + " " + meuSobrenome)

let bemVindo = "Seja bem-vindo ao Senai DSI1"
    console.log(bemVindo);

let hello = "Hello World"
    console.log(hello.length)

let DS = "Desenvolvimento de Sistemas";
let textoMaiusculo = DS.toUpperCase();
    console.log(textoMaiusculo);

let textoMinusculo = DS.toLocaleLowerCase();
    console.log(textoMinusculo);

let nomeCidade = "Guarulhos";
    console.log("Bem vindo à " + nomeCidade + " " + "Onde eu " + meuNome + " " + "nasci e cresci e moro")

// Number
let n1 = 100;
let n2 = 145;
let soma = n1 + n2;
    console.log("A soma de " + n1 + " + " + n2 + " é: " + soma); 

let soma2 = n1 - n2;
    console.log("A subtração de " + n1 + " - " + n2 + " é: " + soma2);
    
let soma3 = n1 * n2;
    console.log("A multiplicação de " + n1 + " * " + n2 + " é: " + soma3);

let soma4 = n1 / n2;
    console.log("A divisão de " + n1 + " / " + n2 + " é: " + soma4);

let soma5 = n1 + n2 / 2 ; 
    console.log("A média de " + n1 + " e " + n2 + " é: " + soma5);

let soma6 = soma * 2 ;
    console.log("O dobro da soma de " + n1 + " + " + n2 + " é: " + soma6);

let soma7 = n1 % n2;
    console.log("O resto da divisão de " + n1 + " % " + n2 + " é: " + soma7);
    
let precoProduto = 150;
let desconto = 0.2;
let precoFinal = precoProduto - (precoProduto * desconto);
    console.log("O preço final do produto é: " + precoFinal);

let idade = 67;
let idadeEmMeses = idade * 12;
    console.log("A idade em meses é: " + idadeEmMeses + " " + "Meses");

let quadrado = n2 * n2;
    console.log("O quadrado de " + n2 + " é: " + quadrado);

// Boolean

let v1 = true;
    console.log(v1)

let v2 = 8;
let tof1 = v2 >= 10;
    console.log(tof1);

let v3 = 25;
let podeBeber = v3 >= 18;
    console.log(podeBeber);

let v4 = 14;
let v4_2 = 18;
    console.log(v4 === v4_2);

    console.log(v4 !== v4_2);

let v5 = 22;
    console.log(v5 % 2 === 0);

let cond1 = true;
let cond2 = false;
    console.log(cond1 && cond2)

    console.log(cond1 || cond2);

    console.log(!cond1);

let texto = "10";
let numero = 10;
    console.log(texto == numero)