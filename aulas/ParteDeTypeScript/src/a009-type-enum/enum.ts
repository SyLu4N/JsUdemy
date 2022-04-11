enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

enum Cores {
  ROXO = 'Roxo',
  VERDE = 201,
  ROSA,
}

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
