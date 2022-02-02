function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome
  };
}

const pesso1 = criaPessoa('Luan', 'Simões');
console.log(pesso1);