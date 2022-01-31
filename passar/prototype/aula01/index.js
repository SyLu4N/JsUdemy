function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

const p1 = new Pessoa('Luan', 'Simões');
const p2 = new Pessoa('Nicoli', 'Ramos');
console.log(p1.nomeCompleto());
console.log(p2, p2.nomeCompleto());