# JSON

JSON (JavaScript Object Notation) é um formato leve de troca de dados entre sistemas e aplicações.

Ele foi criado para ser fácil de ler por humanos e fácil de interpretar por máquinas. Apesar do nome lembrar JavaScript, o JSON é independente de linguagem e pode ser usado em Python, Java, PHP, Node.js, etc.

## Estrutura básica

O JSON usa:
- objetos: pares de chave e valor entre `{}`
- arrays: listas de valores entre `[]`
- strings: textos entre aspas duplas
- números
- booleanos: `true` e `false`
- valor nulo: `null`

Exemplo:

```json
{
  "nome": "Maria",
  "idade": 25,
  "ativo": true,
  "tags": ["aluna", "programadora"],
  "endereco": {
    "cidade": "São Paulo",
    "estado": "SP"
  },
  "telefone": null
}
```

## Como ele é usado?

O JSON é muito usado para:
- enviar dados de um servidor para um navegador
- salvar configurações
- armazenar dados em APIs
- trocar informações entre sistemas diferentes

## Vantagens

- legível e simples
- leve
- fácil de trabalhar em diversas linguagens
- muito usado em APIs e web

## Importante

O JSON não aceita comentários e não pode ter funções ou tipos complexos como em JavaScript.

Ele serve para representar dados estruturados, não código executável.

Em resumo: JSON é uma maneira padronizada de representar informações em texto, usada para comunicação entre sistemas.

<!-- ============================================================================== -->
{
    "cachorro":{
        "nome": "Rex",
        "idade": 3,
        "raça": "Labrador",
        "vacinado": true,
        "peso": 25.5,
        "brinquedos": ["bola", "osso", "frisbee"],
        "dono": {
            "nome": "João",
            "telefone": "11999998888"
        }
    }
}
<!-- ============================================================================== -->
Explicação
<!-- ============================================================================== -->
// String (texto) sempre em aspas
"nome": "Rex",

// Number (Número) - Sem aspas
"idade": 3,
"peso": 25.5,

// Boolean (True/False)
"vacinado": true,

// Array (Lista) - com colchetes
"brinquedos": ["bola", "osso", "frisbee"],

//Object (Objeto) - com chaves
 "dono": {
            "nome": "João",
            "telefone": "11999998888"
        }

// Null (vazio)
"dataFalecimento": null