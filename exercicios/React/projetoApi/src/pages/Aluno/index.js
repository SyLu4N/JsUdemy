import React from 'react';
import Lodash from 'lodash';
import { isEmail } from 'validator';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import axios from '../../services/axios';
import history from '../../services/history';
import { Form, ProfilePicture, Title, Content, Container } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }) {
  const dispatch = useDispatch();

  const id = Lodash.get(match, 'params.id', ''); //Buscando id
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [foto, setFoto] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    //preenche os dados do form
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/aprendiz/${id}`);
        const Foto = Lodash.get(data, 'Fotos[0].url', '');

        setFoto(Foto);

        setNome(data.nome); //preenche o input com os dados da BD
        setSobrenome(data.sobrenome);
        setEmail(data.email);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = Lodash.get(err, 'response.status', 0);
        const errors = Lodash.get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }

    getData();
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;
    for (let error of document.querySelectorAll('.error')) error.remove();

    if (nome.length < 3 || nome.length > 200) {
      formErros = true;
      newError(
        '"Nome" precisa ter de 3 a 50 caracteres',
        document.querySelector('.nome'),
      );
    }

    if (sobrenome) {
      if (sobrenome.length < 3 || sobrenome.length > 200) {
        formErros = true;
        newError(
          '"Sobrenome" precisa ter de 3 a 50 caracteres',
          document.querySelector('.sobrenome'),
        );
      }
    }

    if (!isEmail(email)) {
      formErros = true;
      newError('"E-mail" inválido!', document.querySelector('.email'));
    }

    if (formErros) return;

    sendForm();
  }

  async function sendForm() {
    try {
      setIsLoading(true);

      if (id) {
        await axios.put(`/aprendiz/${id}`, {
          nome,
          sobrenome,
          email,
        });

        toast.success(`Aluno(a) editado com sucesso!`);
        history.push('/');
      } else {
        await axios.post(`/aprendiz/`, {
          nome,
          sobrenome,
          email,
        });

        toast.success(`Aluno(a) criado(a) com sucesso!`);
        history.push('/');
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const status = Lodash.get(err, 'response.status', 0);
      const data = Lodash.get(err, 'response.data', {});
      const errors = Lodash.get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Algo deu errado, tente novamente mais tarde');
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
    setIsLoading(false);
  }

  function newError(msg, campo) {
    const p = document.createElement('p');
    p.innerText = msg;
    p.classList.add('error');
    campo.insertAdjacentElement('afterend', p);
  }

  return (
    <>
      {id ? (
        <>
          <Content>
            <Loading isLoading={isLoading} />

            <Title>
              {nome} {sobrenome}
            </Title>

            <ProfilePicture>
              {foto ? (
                <img src={foto} alt={nome} crossOrigin="" />
              ) : (
                <FaUserCircle size={180} />
              )}
              <Link to={`/fotos/${id}`}>
                <FaEdit size={24} />
              </Link>
            </ProfilePicture>
          </Content>

          <Container>
            <Form onSubmit={handleSubmit}>
              <input
                className="aluno"
                placeholder="Nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <input
                className="aluno"
                placeholder="Sobrenome"
                type="text"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />

              <input
                className="aluno"
                placeholder="E-mail"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button type="submit" className="alunoBtn">
                Salvar
              </button>
            </Form>
          </Container>
        </>
      ) : (
        <Container>
          <Form onSubmit={handleSubmit} className="mt">
            <p className="titleNew">
              Novo aluno <AiOutlineUserAdd size={30} />
            </p>

            <label htmlFor="">
              <input
                className="nome"
                placeholder="Nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>

            <label htmlFor="">
              <input
                placeholder="Sobrenome"
                type="text"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </label>

            <label htmlFor="">
              <input
                placeholder="E-mail"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <button type="submit">Criar Aluno</button>
          </Form>
        </Container>
      )}
    </>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
