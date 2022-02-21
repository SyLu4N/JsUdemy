function User() {
  this.userClick();
}

User.prototype.userClick = function () {
  document.addEventListener('click', e =>{
    const el = e.target;
    if(el.classList.contains('name')){
    }
  });
};

const user = new User();
