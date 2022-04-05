import React from 'react';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const usuarioStored = useSelector((state) => state.auth.user.usuario);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [usuario, setUsuario] = React.useState('');

  React.useEffect(() => {
    setNome(nomeStored);
    setEmail(emailStored);
    setUsuario(usuarioStored);
  }, [emailStored, id, nomeStored, usuarioStored]);

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

    if (formErros) return;

    dispatch(actions.registerRequest({ nome, email, usuario, id }));
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
            disabled
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
            disabled
          />
        </label>

        <p>
          <a href="/editPassword">Trocar senha</a>
        </p>
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
