function User() {
  this.userClick();
  this.navL = document.querySelector('.navL');
}

User.prototype.userClick = function () {
  document.addEventListener('click', e =>{
    const el = e.target;
    if(el.classList.contains('imgUser')){
      this.navL.removeAttribute('class', 'navN');
      this.navL.setAttribute('class', 'navB');
      this.navL.setAttribute('class', 'navL');
    }

    if(!el.classList.contains('imgUser')){
      this.navL.removeAttribute('class', 'navB');
      this.navL.setAttribute('class', 'navN');
    }

  });
};

const user = new User();
