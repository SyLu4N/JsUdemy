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

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const isLoading = useSelector((state) => state.auth.isLoading);

  function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;

    if (!isEmail(email)) {
      formErros = true;
      newError('"E-mail" inválido!', document.querySelector('.email'));
    }

    if (password.length < 6 || password.length > 50) {
      formErros = true;
      newError('Senha inválida!', document.querySelector('.password'));
    }

    if (formErros) return;

    sendForm();
  }

  async function sendForm() {
    dispatch(actions.loginRequest({ email, password, prevPath }));
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
          E-mail
          <input
            className="email"
            type="text"
            placeholder="Seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Senha
          <input
            className="password"
            type="password"
            placeholder="Sua senha"
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
