export class Pessoa {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Luan', 'Simões', 20, '111.111.111-02');
pessoa.cpf = '000.000.000-01';
console.log(pessoa.cpf);
