import React from 'react';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Register() {
  const id = useSelector((state) => state.auth.user.id);
  const isLoading = useSelector((state) => state.auth.isLoading);

  React.useEffect(() => {
    if (id) history.push('/user');
  }, [id]);

  const dispatch = useDispatch();

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [usuario, setUsuario] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordCheck, setPasswordCheck] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;
    for (let error of document.querySelectorAll('.error')) error.remove();

    if (nome.length < 3 || nome.length > 200) {
      formErros = true;
      newError(
        '"Nome" precisa ter de 3 a 200 caracteres',
        document.querySelector('.nome'),
      );
    }

    if (!isEmail(email)) {
      formErros = true;
      newError('"E-mail" inválido!', document.querySelector('.email'));
    }

    if (!usuario || usuario.length < 6 || usuario.length > 16) {
      formErros = true;
      newError(
        '"Usuário" deve conter de 6 a 16 caracteres!',
        document.querySelector('.usuario'),
      );
    }

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

    dispatch(actions.registerRequest({ nome, email, usuario, password, id }));
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
      <h1>Crie sua conta</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className="nome"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            className="email"
          />
        </label>

        <label htmlFor="usuario">
          Usuário
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Seu usuário"
            className="usuario"
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
            className="password"
          />
        </label>

        <label htmlFor="passwordCheck">
          Repita a senha
          <input
            type="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            placeholder="Repita a senha"
            className="passwordCheck"
          />
        </label>

        <button type="submit">Cadastrar-se</button>
        <p className="login">
          Tem uma conta? <a href="/login"> Conecte-se</a>
        </p>
      </Form>
    </Container>
  );
}
