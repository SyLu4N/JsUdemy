import React from 'react';
import Lodash from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';
import { Center } from '../Fotos/styled';

export default function Fotos({ match }) {
  const dispatch = useDispatch();

  const id = Lodash.get(match, 'params.id', '');

  const [isLoading, setIsLoading] = React.useState(false);
  const [foto, setFoto] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    //preenche os dados do form
    if (!id) return;
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/aprendiz/${id}`);

        setFoto(Lodash.get(data, 'Fotos[0].url', ''));
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

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const fotoURL = await URL.createObjectURL(file);

    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', file);

    try {
      setIsLoading(true);

      await axios.post('/foto/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      location.reload();
      toast.success('Foto enviada com sucesso!');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = Lodash.get(err, 'response', '');
      toast.error('Erro ao enviar foto');

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

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

  function newError(msg, campo) {
    const p = document.createElement('p');
    p.innerText = msg;
    p.classList.add('error');
    campo.insertAdjacentElement('afterend', p);
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

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Foto de Perfil</Title>
      <Form>
        <label htmlFor="foto">
          {foto ? (
            <div className="esconde">
              <p>Selecionar</p>
              <img src={foto} alt="Usuário" crossOrigin="" />
            </div>
          ) : (
            'Selecionar'
          )}
          <input
            type="file"
            id="foto"
            onChange={handleChange}
            className="none"
          />
        </label>
      </Form>
      <Center>
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

          <div>
            <button
              type="button"
              className="cancelar"
              onClick={() => history.push('/')}
            >
              Cancelar
            </button>
            <button type="submit" className="alunoBtn">
              Salvar
            </button>
          </div>
        </Form>
      </Center>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
