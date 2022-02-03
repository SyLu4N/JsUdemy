class ControleRemoto{
  constructor(TV){
    this.nome = TV;
    this.volume = 10;
  }

  aumentaVolume(){
    this.volume++;
  }
  //Método de istància
  diminuirVolume(){
    this.volume--;
  }

  //Método statico
  static trocaPilha(){
    console.log('Vou trocar menor')
  }
}

const c1 = new ControleRemoto('LG');
c1.diminuirVolume();
c1.diminuirVolume();
c1.diminuirVolume();
c1.diminuirVolume();
c1.diminuirVolume();
ControleRemoto.trocaPilha();
console.log(c1);