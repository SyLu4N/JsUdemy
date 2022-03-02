function User() {
  this.userClick();
  this.navL = document.querySelector('.navL');
  this.contador = 0;
}

User.prototype.userClick = function () {
  document.addEventListener('click', e =>{
    const el = e.target;
    
    if(el.classList.contains('imgUser') && this.contador < 1){
      this.navL.removeAttribute('class', 'navN');
      this.navL.setAttribute('class', 'navB');
      this.navL.setAttribute('class', 'navL');
      this.contador = 1;

    }else{

      if(this.contador >= 1){
        this.navL.removeAttribute('class', 'navB');
        this.navL.setAttribute('class', 'navN');
        this.contador = 0;
      }

      if(!el.classList.contains('imgUser') && this.contador >= 1){
        this.contador = 0;
        this.navL.removeAttribute('class', 'navB');
        this.navL.setAttribute('class', 'navN');
      }
    }
  });
};

const user = new User();
