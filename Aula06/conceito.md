# O que é DOM?

DOM significa Document Object Model, ou Modelo de Objeto do Documento.

É uma representação em árvore dos elementos HTML ou XML que o navegador cria a partir do código da página. Cada tag, atributo e texto vira um "nó" dentro dessa estrutura, permitindo que o JavaScript leia e manipule a página.

### Exemplo

```html
<div id="caixa">
  <p>Olá, mundo!</p>
</div>
```

O navegador transforma isso em uma árvore de objetos. Com o JavaScript, você pode fazer coisas como:

```javascript
const caixa = document.getElementById('caixa');
caixa.innerHTML = '<p>Texto alterado!</p>';
```

### Funções principais do DOM

- Acessar elementos da página
- Alterar textos, atributos e estilos
- Criar, remover ou mover elementos
- Responder a eventos do usuário, como clique e teclado

Em resumo, o DOM é a ponte entre o HTML e o JavaScript, permitindo que a página interaja dinamicamente com o usuário.
