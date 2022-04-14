export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public cpf: string,
  ) {}

  metodoNormal() {
    console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao);
  }

  static criaPessoa(name: string, surname: string): Pessoa {
    return new Pessoa(name, surname, 40, '000.000.000-00');
  }
}

const pessoa1 = new Pessoa('Luan', 'Simões', 20, '111.111.111-02');
const pessoa2 = Pessoa.criaPessoa('Mary', 'Miranda');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
