import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [password, setPassword] = React.useState('');
  const [oldPassword, setOldPassword] = React.useState('');
  const [passwordCheck, setPasswordCheck] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;
    for (let error of document.querySelectorAll('.error')) error.remove();

    if (password.length < 6 || password.length > 50) {
      formErros = true;
      newError(
        '"Senha" deve conter de 6 a 50 caracteres!',
        document.querySelector('.password'),
      );
    }

    if (!passwordCheck) {
      formErros = true;
      newError(
        '* Campo obrigatório!',
        document.querySelector('.passwordCheck'),
      );
    }

    if (passwordCheck !== password) {
      formErros = true;
      newError(
        'Senhas devem ser iguais!',
        document.querySelector('.passwordCheck'),
      );
    }

    if (formErros) return;

    dispatch(actions.registerRequest({ password, id }));
    history.push('/user');
  }

  function newError(msg, campo) {
    const p = document.createElement('p');
    p.innerText = msg;
    p.classList.add('error');
    campo.insertAdjacentElement('afterend', p);
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Mudar senha</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Senha anterior"
            className="oldPassword"
          />
        </label>

        <label htmlFor="email">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nova senha"
            className="password"
          />
        </label>

        <label htmlFor="usuario">
          <input
            type="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            placeholder="Repita a senha"
            className="passwordCheck"
          />
        </label>

        <div>
          <button
            type="submit"
            className="cancelar"
            onClick={() => history.push('/user')}
          >
            Cancelar
          </button>
          <button type="submit" className="salvar" onClick={handleSubmit}>
            Salvar
          </button>
        </div>
      </Form>
    </Container>
  );
}
