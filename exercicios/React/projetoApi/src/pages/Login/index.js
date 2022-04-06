import React from 'react';
import { isEmail } from 'validator';
import Lodash from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function Login(props) {
  const dispatch = useDispatch(); //react

  const prevPath = Lodash.get(props, 'location.state.prevPath', '/'); //volta para a página caso não logado

  const [log, setLog] = React.useState('');
  const [password, setPassword] = React.useState('');
  const isLoading = useSelector((state) => state.auth.isLoading);

  function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;
    for (let apagar of document.querySelectorAll('.error')) apagar.remove();

    if (log.indexOf('@') !== -1 || log.length < 6) {
      if (!isEmail(log)) {
        formErros = true;
        newError(
          'E-mail ou Usuário inválido!',
          document.querySelector('.email'),
        );
      }
    }

    if (password.length < 6 || password.length > 50) {
      formErros = true;
      newError('Senha inválida!', document.querySelector('.password'));
    }

    if (formErros) return;

    sendForm();
  }

  async function sendForm() {
    dispatch(actions.loginRequest({ log, password, prevPath }));
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
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            className="email"
            type="text"
            placeholder="E-mail ou usuário"
            value={log}
            onChange={(e) => setLog(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <input
            className="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Entrar agora</button>
        <div className="flex">
          <p>
            <a href="/register">Ainda não tenho conta</a>
          </p>
          <p>|</p>
          <p>
            <a href="">Esqueci minha senha</a>
          </p>
        </div>
      </Form>
    </Container>
  );
}
