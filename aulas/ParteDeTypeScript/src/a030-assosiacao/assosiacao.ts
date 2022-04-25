export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null)
      return console.log('Não posso escrever sem ferramenta');
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

export class Maquina extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando`);
  }
}

const escritor = new Escritor('Luan');
const caneta = new Caneta('Bic');
const maquinaEscrever = new Caneta('Eslint');

/* console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);
 */
escritor.ferramenta = caneta;
escritor.ferramenta = maquinaEscrever;
escritor.escrever();
