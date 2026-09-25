// Exercício 10 – Cadastro de Usuário
// Crie um objeto chamado conta para representar o cadastro de um usuário.

// O objeto deve possuir as seguintes propriedades:
// usuario
// senha
// nome
// email
// nivel
// curso
// turma
// idade

// Utilize os seguintes dados:
// Usuário: eduardo
// Senha: 1234
// Nome: Eduardo Silva
// E-mail: eduardo@email.com
// Nível: administrador
// Curso: Desenvolvimento de Sistemas
// Turma: DS 2
// Idade: 18

// Depois de criar o objeto, utilize as propriedades do objeto para montar e exibir no console as seguintes informações:
// Nome do usuário
// Nome completo
// E-mail
// Curso
// Turma
// Idade
// Nível de acesso
// Senha

// Por fim, crie uma mensagem utilizando várias propriedades do objeto:

// O usuário eduardo, de 18 anos, está matriculado no curso de Desenvolvimento de Sistemas, turma DS 2. Seu nível de acesso é administrador e seu e-mail é eduardo@email.com. A senha cadastrada é 1234.

let conta = {
  usuario: "eduardo",
  senha: "1234",
  nome: "Eduardo Silva",
  email: "eduardo@email.com",
  nivel: "administrador",
  curso: "Desenvolvimento de Sistemas",
  turma: "DS 2",
  idade: 18
};
console.log("Nome de usuário:", conta.usuario);
console.log("Nome completo:", conta.nome);
console.log("E-mail:", conta.email);
console.log("Curso:", conta.curso);
console.log("Turma:", conta.turma);
console.log("Idade:", conta.idade);
console.log("Nível de acesso:", conta.nivel);
console.log("Senha:", conta.senha);

console.log("O usuário " + conta.usuario + ", de " + conta.idade + " anos, está matriculado no curso de " + conta.curso + ", turma " + conta.turma + ". Seu nível de acesso é " + conta.nivel + " e seu e-mail é " + conta.email + ". A senha cadastrada é " + conta.senha);