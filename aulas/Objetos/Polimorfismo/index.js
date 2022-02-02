function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if(valor > this.saldo){
    console.log(`Saldo insuficiente! Seu saldo é de R$${this.saldo}`)
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | R$${this.saldo}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if(valor > this.saldo + this.limite){
    console.log(`Saldo insuficiente! Seu saldo é de R$${this.saldo}`)
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

const conta1 = new Conta(11, 22, 10);
const contaCorrente = new ContaCorrente(12, 23, 10, 10);
contaCorrente.sacar(20);
conta1.sacar(21);