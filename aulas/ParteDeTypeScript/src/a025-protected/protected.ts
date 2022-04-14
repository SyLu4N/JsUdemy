export class Empresa {
  public readonly name: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly CNPJ: string;

  constructor(name: string, CNPJ: string) {
    this.name = name;
    this.CNPJ = CNPJ;
  }

  addColaborador(colaborador: Colaborador): void {
    // isso é public
    this.colaboradores.push(colaborador);
  }

  showColaborador() {
    this.colaboradores.forEach((colaborador) => console.log(colaborador));
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Asimões', '13.111.111/0001-22');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(public readonly name: string, public readonly surname: string) {}
}

const empresa = new Udemy();
const colaborador1 = new Colaborador('Luan', 'Simões');
const colaborador2 = new Colaborador('Lucas', 'Simões');
const colaborador3 = new Colaborador('Carlos', 'Simões');
empresa.addColaborador(colaborador1);
empresa.addColaborador(colaborador2);
empresa.addColaborador(colaborador3);
const colaboradorRemove = empresa.popColaborador();
console.log(colaboradorRemove);
console.log(empresa);
