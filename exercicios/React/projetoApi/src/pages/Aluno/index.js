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
import { Container } from '../../styles/GlobalStyles';
import { Form, ProfilePicture, Title } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }) {
  const dispatch = useDispatch();

  const id = Lodash.get(match, 'params.id', ''); //Buscando id
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [idade, setIdade] = React.useState('');
  let [peso, setPeso] = React.useState('');
  let [altura, setAltura] = React.useState('');
  const [foto, setFoto] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    //preenche os dados do form
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = Lodash.get(data, 'Fotos[0].url', '');

        setFoto(Foto);

        setNome(data.nome); //preenche o input com os dados da BD
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

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

    if (sobrenome.length < 3 || sobrenome.length > 200) {
      formErros = true;
      newError(
        '"Sobrenome" precisa ter de 3 a 50 caracteres',
        document.querySelector('.sobrenome'),
      );
    }

    if (!isEmail(email)) {
      formErros = true;
      newError('"E-mail" inválido!', document.querySelector('.email'));
    }

    if (idade.length < 1 || idade.length > 3) {
      formErros = true;
      newError('"Idade" inválida!', document.querySelector('.idade'));
    }

    if (peso.length < 1 || peso.length > 5) {
      formErros = true;
      newError('"Peso" inválido!', document.querySelector('.peso'));
    }

    if (toString(peso).indexOf(',') !== -1) {
      peso = peso.replace(',', '.');
    }

    if (altura.length < 1 || altura.length > 5) {
      formErros = true;
      newError('"Altura" inválida!', document.querySelector('.altura'));
    }

    if (toString(altura).indexOf(',') !== -1) {
      altura = altura.replace(',', '.');
    }

    if (formErros) return;

    sendForm();
  }

  async function sendForm() {
    try {
      setIsLoading(true);

      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          peso,
          altura,
          idade,
        });

        toast.success(`Aluno(a) editado com sucesso!`);
        history.push('/');
      } else {
        await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          altura,
          peso,
          idade,
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
    <Container>
      <Loading isLoading={isLoading} />

      <Title>
        {id ? `${nome} ${sobrenome}` : 'Novo aluno'}{' '}
        <AiOutlineUserAdd size={30} />
      </Title>

      {id && (
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
      )}

      <Form onSubmit={handleSubmit}>
        <label htmlFor="">
          Nome
          <input
            className="nome"
            placeholder="Nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Sobrenome
          <input
            className="sobrenome"
            placeholder="Sobrenome"
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </label>

        <label htmlFor="">
          E-mail
          <input
            className="email"
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Idade
          <input
            className="idade"
            placeholder="Idade"
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Peso
          <input
            className="peso"
            placeholder="Peso"
            type="text"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Altura
          <input
            className="altura"
            placeholder="Altura"
            type="text"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </label>

        <button type="submit">{id ? 'Salvar' : 'Criar Aluno'}</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired, //Validando match
};
