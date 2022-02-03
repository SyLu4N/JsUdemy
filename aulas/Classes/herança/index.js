class DispositivoEletronico{
  constructor(nome){
    this.nome = nome;
    this.ligado = false;
  }

  ligar(){
    if(this.ligado){
      console.log(this.nome + 'Já esta ligado!');
      return;
    } 
    this.ligado = true;
  }

  desligar(){
    if(!this.ligado){
      console.log(this.nome + 'Já esta desligado!');
      return;
    }
    this.ligado = false;
  }
}

const celular = new DispositivoEletronico('Smartphone');
celular.ligar();
celular.desligar();
console.log(celular);

class Smartphone extends DispositivoEletronico{
  constructor(nome, cor, modelo){
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

const iphone = new Smartphone('Iphone X', 'Preto', '124gb');
iphone.ligar();
console.log(iphone);