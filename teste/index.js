function Cadastro() {
  this.recebeForm();
}

Cadastro.prototype.recebeForm = function () {
  this.form = document.querySelector('.form');
  this.form.addEventListener('submit', e => {
    e.preventDefault();
    this.validaCampos();
  });
}

Cadastro.prototype.validaCampos = function (e) {
  for(error of this.form.querySelectorAll('.error')) error.remove();

  for(campo of this.form.querySelectorAll('.input')){
    const label = campo.previousElementSibling.innerText.slice(0, -3);
    if(!campo.value) this.newError(campo, `Campo "${label}" é obrigatório`)
    if(campo.classList.contains('cpf')) this.validaCPF(campo);
    if(campo.classList.contains('usuario')) this.validaUsuario(campo);
    if(campo.classList.contains('senha')) this.validaSenha(campo);
    if(campo.classList.contains('senha') || campo.classList.contains('senha2')) this.validaSenhas(campo);
  }
} 

Cadastro.prototype.newError = function (campo, msg) {
  const p = document.createElement('p');
  p.innerText = msg;
  p.classList.add('error');
  campo.insertAdjacentElement('afterend', p);
}

Cadastro.prototype.validaCPF = function (campo) {
  const cpf = new ValidaCPF(campo.value);
  if(!cpf.valida()){
    this.newError(campo, 'CPF Inválido!')
  }
}

Cadastro.prototype.validaUsuario = function (campo) {
  const usuario = campo.value;
  if(usuario.length < 3) this.newError(campo, 'Usuario deve conter de 3 a 12 caracteres');
  if(usuario.length > 12) this.newError(campo, 'Usuario deve conter de 3 a 12 caracteres');

}

Cadastro.prototype.validaSenha = function (campo) {
  const senha = campo.value;
  if(senha.length < 6) this.newError(campo, 'Senha deve conter de 6 a 12 caracteres');
  if(senha.length > 12) this.newError(campo, 'Senha deve conter de 6 a 12 caracteres');
  
}

Cadastro.prototype.validaSenhas = function (campo) {
  const senha = campo.value;
  const senha2 = campo.value;
  if(senha2 !== senha) this.newError(campo, 'Senha não conferem');
}

const cadastro1 = new Cadastro(); 
