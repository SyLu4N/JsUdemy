export class Pessoa {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.surname;
  }
}

export class Aluno extends Pessoa {
  getFullName(): string {
    return 'Aluno: ' + this.name + ' ' + this.surname;
  }
}
export class Cliente extends Pessoa {
  getFullName(): string {
    return 'Cliente: ' + this.name + ' ' + this.surname;
  }
}

const aluno = new Aluno('Luan', 'Simões', 20, '111.111.111-02');
const cliente = new Cliente('Viviane', 'Simões', 40, '111.111.111-01');

console.log(aluno.getFullName());
console.log(cliente.getFullName());
