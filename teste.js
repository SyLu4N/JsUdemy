function criaPessoas(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,
    peso,
    altura,
    get imc() { //getter
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  }

}

const pessoa1 = criaPessoas('Luan', 'Simões', 63 ,1.70);
console.log(pessoa1.imc);
