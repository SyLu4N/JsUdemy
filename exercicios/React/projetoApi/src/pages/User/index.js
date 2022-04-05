import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import history from '../../services/history';

export default function Register() {
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

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Meu perfil</h1>

      <Form>
        <p className="nome">{nome}</p>
        <p className="usuario">{usuario}</p>
        <p className="email">{email}</p>

        <div>
          <button
            type="submit"
            className="edit"
            onClick={() => history.push(`/user/${id}`)}
          >
            Editar
          </button>
        </div>
      </Form>
    </Container>
  );
}
