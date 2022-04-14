import isEmail from 'validator/lib/isEmail';

const form = document.querySelector('.form') as HTMLFormElement;
let isError = false;

form.addEventListener('submit', (e: Event): void => {
  e.preventDefault();
  checkForm();
  checkPassword();
  if (!isError) alert('Enviado!');
});

function checkForm(): void {
  form.querySelectorAll('.errorForm').forEach((item) => {
    isError = false;
    const parent = item.previousSibling as HTMLInputElement;
    parent.classList.remove('errorInput');
    item.remove();
  });

  form.querySelectorAll('input').forEach((campo) => {
    if (campo.classList.contains('username') && campo.value.length < 4)
      newError(campo, 'Usuario precisa ter mais 4 caracteres');

    if (campo.classList.contains('email') && !isEmail(campo.value))
      newError(campo, 'Email inválido!');
  });
}

function checkPassword(): void {
  const password = document.querySelector('.password') as HTMLInputElement;
  const password2 = document.querySelector('.password2') as HTMLInputElement;

  if (password.value.length < 6)
    newError(password, 'Senha precisa ter mais de 6 caracteres');

  if (password.value !== password2.value)
    newError(password2, 'Senhas precisam ser iguais');
}

function newError(campo: HTMLInputElement, msg: string) {
  isError = true;
  campo.classList.add('errorInput');
  const p = document.createElement('p');
  p.innerHTML = msg;
  p.classList.add('errorForm');
  campo.insertAdjacentElement('afterend', p);
}
