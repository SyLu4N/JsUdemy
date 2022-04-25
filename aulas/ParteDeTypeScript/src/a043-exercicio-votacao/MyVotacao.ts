export class Votation {
  private _python: number;
  private _javascript: number;
  private _typescript: number;

  constructor() {
    this._python = 0;
    this._javascript = 0;
    this._typescript = 0;
  }

  get python(): number {
    return this._python;
  }

  votarPython(): void {
    this._python++;
  }

  get javascript(): number {
    return this._javascript;
  }

  votarJavascript(): void {
    this._javascript++;
  }

  get typescript(): number {
    return this._typescript;
  }

  votarTypescript(): void {
    this._typescript++;
  }
}

const votos = new Votation();
votos.votarPython();
votos.votarPython();
votos.votarPython();

console.log('Qual a sua linguagem de programação favorita?');
console.log(`Python ${votos.python}`);
console.log(`Javascript ${votos.javascript}`);
console.log(`Typescript ${votos.typescript}`);
