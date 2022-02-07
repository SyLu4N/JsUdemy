let usuario = '';
let senha = '';

function Cadastro() {
  this.recebeForm();
}

Cadastro.prototype.recebeForm = function () {
  this.form = document.querySelector('.form');
  this.form.addEventListener('submit', e => {
    e.preventDefault();
    const camposValidos = this.validaCampos();
    const senhasValidas = this.validaSenha();
    if(camposValidos && senhasValidas){
      console.log(usuario);
      console.log(senha.value);
      alert('Cadastro Realizado com Sucesso!');
      this.form.submit();
    }
  });
}

Cadastro.prototype.validaCampos = function (e) {
  let valid = true;

  for(error of this.form.querySelectorAll('.errorForm')) error.remove();

  for(campo of this.form.querySelectorAll('.inputForm')){
    const label = campo.previousElementSibling.innerText.slice(0, -3);

    if(!campo.value){
      this.newError(campo, `Campo "${label}" é obrigatório`);
      valid = false;
    } 

    if(campo.classList.contains('cpf')){
      if(!this.validaCPF(campo)) valid = false;
    }

    if(campo.classList.contains('usuario')){
     if(!this.validaUsuario(campo)) valid = false;
    }
  } 
  return valid;
}

Cadastro.prototype.newError = function (campo, msg) {
  const p = document.createElement('p');
  p.innerText = msg;
  p.classList.add('errorForm');
  campo.insertAdjacentElement('afterend', p);
}

Cadastro.prototype.validaCPF = function (campo) {
  let valid = true;
  const cpf = new ValidaCPF(campo.value);
  if(!cpf.valida()){
    this.newError(campo, 'CPF Inválido!');
    valid = false;
  } 
  return valid;
}

Cadastro.prototype.validaUsuario = function (campo) {
  let valid = true;
  usuario = campo.value;
  if(usuario.length < 3 || usuario.length > 12) {
    this.newError(campo, 'Usuario deve conter de 3 a 12 caracteres');
    valid = false;
  }
  if(!usuario.match(/^[A-Za-z0-9]+$/g)) {
    this.newError(campo, 'Usuario deve possuir apenas letras e/ou números')
    valid = false;
  }

  return valid;
}

Cadastro.prototype.validaSenha = function (campo) {
  let valid = true
  senha = this.form.querySelector('.senha');
  const senha2 = this.form.querySelector('.senha2');
  if(senha.value.length < 6 || senha.value.length > 12){
    this.newError(senha, 'Senha deve conter de 6 a 12 caracteres');
    valid = false;
  } 
  if(senha.value !== senha2.value){
    this.newError(senha2, 'As senhas devem ser iguais.')
    this.newError(senha, 'As senhas devem ser iguais.')
    valid = false;
  }

  return valid;
}
