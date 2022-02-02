/* const _velocidade = Symbol('velocidade');
class Carro{
  constructor(nome){
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade(){
    return this[_velocidade];
  }

  set velocidade(valor){
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor < 0) return;
    this[_velocidade] = valor;
  }

  acelerar(){
    if(this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  desacelerar(){
    if(this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const carro1 = new Carro('fusca');
carro1.acelerar();
carro1.velocidade = 20;

console.log(carro1); */

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor){
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const p1 = new Pessoa('Luan', 'Carlos');
p1.nomeCompleto = 'Luan Carlos Simões';
console.log(p1);