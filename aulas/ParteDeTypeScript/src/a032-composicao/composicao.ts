export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  freiar(): void {
    this.motor.freiar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor Ligado!');
  }

  acelerar(): void {
    console.log('Acelerando o motor!');
  }

  freiar(): void {
    console.log('Freiando o motor!');
  }

  desligar(): void {
    console.log('Motor desligado!');
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.freiar();
carro.desligar();
