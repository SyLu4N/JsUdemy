const error = "Conta Invalida!";

function criaCalculadora() {
  return{
    display: document.querySelector('.display'),

    iniciar(){
      this.capturaClick();
      this.keypress();
    }, 

    keypress(){
      this.display.classList.remove('red');
      this.display.addEventListener('keypress', e =>{
        if(this.display.value === error) this.display.value = '';
        if(e.keyCode === 13){
          this.solution(this.display.value);
        }
      });
    },

    capturaClick(){
      document.addEventListener('click', e =>{
        const el = e.target;
        if(this.display.value === error) this.display.value = '';

        if(el.classList.contains('btnNumber')){
          this.alimentaDisplay(el.innerText);
          this.display.focus();
          this.display.classList.remove('red');
        }

        if(el.classList.contains('btnClear')){
          this.clearDisplay();
          this.display.focus();
          this.display.classList.remove('red');
        }

        if(el.classList.contains('btnDel')){
          this.delDisplay();
          this.display.focus();
          this.display.classList.remove('red');
        }

        if(el.classList.contains('btnEq')){
          this.solution(this.display.value);
          this.display.focus();
          this.display.classList.remove('red');
        }  
      });
    },

    alimentaDisplay(text){
      this.display.value += text;
    },

    clearDisplay(){
      this.display.value = '';
    },

    delDisplay(){
      this.display.value = this.display.value.slice(0, -1);
    },

    solution(value){
      let conta = value;

      try{
        conta = eval(conta);

        if(conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
          this.display.classList.add('red');
          this.display.value = error;
          this.apagarError();
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

const calculadora = criaCalculadora();
calculadora.iniciar();
