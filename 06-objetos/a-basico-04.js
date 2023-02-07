const usuario = {
  email: "aluno@cod3r.com.br",
};

console.log(usuario.email);
console.log(usuario.nome); //undefined porque não foi criado

usuario.nome = "Aluno";

console.log(usuario.nome);
console.log(usuario);
