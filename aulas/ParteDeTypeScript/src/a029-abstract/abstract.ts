export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    console.log(`* ${this.nome} está sendo atacado.`);
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida.`);
    console.log();
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + ' ' + this.fraseAtaque());
  }

  fraseAtaque(): string {
    const frasesAtaque = [
      'Agora você vai ver! AAAA!',
      'Morre seu lixo!',
      'Aaaaaaaaaa!!!!',
      'Seu fudido, TOMAA!!!',
      'MORRE, MORRE MORREEEEEEEEEEE!!!',
      'Agora você tá ferrado, AAA!!!',
    ];

    const random = Math.round(
      Math.random() * (frasesAtaque.length - 1 - 0) + 0,
    );
    return frasesAtaque[random];
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + 'AaaAAAAa!');
  }
}

const guerreira = new Guerreira('Patricia', 100, 1000);
const monstro = new Monstro('Zumbie', 30, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
