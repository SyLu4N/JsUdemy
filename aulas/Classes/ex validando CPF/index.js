// 705.484.450-52 070.987.720-03
class ValidaCPF{
  constructor(cpf){
    Object.defineProperty(this, 'CPFLimpo' ,{
      writable: false, //pode ser sobreescrito
      value: cpf.replace(/\D+/g, ''),
      enumerable: true
    });
  }

  eSequencia(){
    return this.CPFLimpo[0].repeat(this.CPFLimpo.length) === this.CPFLimpo;
  }

  novosDigitos(){
    const CPFParcial = this.CPFLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(CPFParcial);
    const digito2 = ValidaCPF.geraDigito(CPFParcial + digito1);
    this.CPFValidado = CPFParcial + digito1 + digito2;
  }

  static geraDigito(cpf){
    let total = 0;
    let contador = cpf.length + 1;
    for(let i of cpf){
      total += contador * Number(i);
      contador--;
    }
    const digito = 11 - (total % 11); 
    return digito >= 10 ? 0 : digito;
  }
  
  valida(){
    if(!this.CPFLimpo) return 'CPF Inválido';
    if(this.CPFLimpo.length !== 11) return 'CPF Inválido';
    if(this.eSequencia()) return 'CPF Inválido';
    this.novosDigitos();
    return this.CPFValidado === this.CPFLimpo ? 'CPF Válido!' : 'CPF Inválido';
  }
}

const CPF = new ValidaCPF('070.987.720-03');
console.log(CPF.valida());
