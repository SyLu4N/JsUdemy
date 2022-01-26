function criaCalculadora() {
  return{
    display: document.querySelector('.display'),
    
    inicia(){
      this.clickBotoes();
      this.pressTeclas();
      this.addZero();
    },

    addZero(){
      if(this.display.value === '') this.display.setAttribute('value', '0');
    },

    pressTeclas(){
      this.removeZero();
      this.display.addEventListener('keypress', e => {
        if(e.keyCode === 13){
          this.realizaConta();
        }
      });
    },

    
    clickBotoes(){
      document.addEventListener('click', e => {
        this.display.classList.remove('red');
        const el = e.target;

        if(this.display.value === error){
          this.display.value = '0';
          this.display.focus();
        }

        if(el.classList.contains('btnNum')){
          this.btnParadisplay(el.innerText);
          this.display.focus();
        }
        if(el.classList.contains('btnClear')){
          this.apagar();
          this.display.focus();
        }
        if(el.classList.contains('btnDel')){
          this.deleteOne();
          this.display.focus();
        }
        if(el.classList.contains('btnEq')){
          this.realizaConta();
          this.display.focus();
        }
        
      });
    },
    
    btnParadisplay(text){
      this.display.value += text;
    },
    
    deleteOne(){
      this.display.value = this.display.value.slice(0, -1);
    },
    
    apagar(){
      this.display.value = '';
    },
    
    realizaConta(){
      let conta = this.display.value;

      try{
        conta = eval(conta);

        if(conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
          this.display.classList.add('red');
          this.display.value = error;
          return;
        }

        this.display.value = conta;
      }catch(e){
        this.display.classList.add('red');
        this.display.value = error;
        return;
      }
    },

  };
}

const error = "Conta Inválida!";
const calculadora = criaCalculadora();
calculadora.inicia();