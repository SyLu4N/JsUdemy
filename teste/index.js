function criaCalculadora() {
  return{
    display: document.querySelector('.display'),

    iniciar(){
      this.capturaClick();
    },

    capturaClick(){
      document.addEventListener('click', e =>{
        const el = e.target;
        this.display.focus();

        if(el.classList.contains('btnNumber')){
          this.alimentaDisplay(el.innerText);
        }

        if(el.classList.contains('btnClear')){
          this.clearDisplay();
        }

        if(el.classList.contains('btnDel')){
          this.delDisplay();
        }

        if(el.classList.contains('btnEq')){
          this.solution(this.display.value);
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
      const solution = eval(value);
      if(!solution){
        this.display.value = 'Conta inválida!';
      }

      this.display.value = solution;
    },


  };
}

const calculadora = criaCalculadora();
calculadora.iniciar();