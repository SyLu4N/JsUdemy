import React from 'react';
import Lodash from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';
import {
  AlunoContainer,
  ProfilePicture,
  NovoAluno,
  Search,
  Content,
  Opacity,
  Limpo,
} from './styled';
import Loading from '../../components/Loading';
import Welcome from '../../images/welcome.svg';

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const id = useSelector((state) => state.auth.user.id);
  const [mostraAlunos, setMostraAlunos] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get('/aprendiz');
        setAlunos(response.data);
        setMostraAlunos(response.data);
        setIsLoading(false);
      } catch (err) {
        const status = Lodash.get(err, 'response.status', 0);

        if (status === 401) {
          setIsLoading(false);
          return;
        } else {
          toast.error('Ocorreu um erro, tente novamente mais tarde! ');
          setIsLoading(false);
        }
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  function handleDeleteAsk(e) {
    e.preventDefault();
    const el = e.currentTarget.nextSibling;
    const close = e.currentTarget;

    const ee = e.target;

    el.setAttribute('class', 'block exclamation');
    close.setAttribute('class', 'none');

    document.addEventListener('click', function fn(click) {
      const clique = click.target;
      if (
        !clique.classList.contains('exclamation') &&
        !clique.classList.contains('delete') &&
        clique !== ee
      ) {
        el.removeAttribute('class');
        el.setAttribute('class', 'none');
        close.removeAttribute('class');
        close.setAttribute('class', 'block delete');
        document.removeEventListener('click', fn);
      }
    });
    return;
  }

  const handleDelete = async (e, id, index) => {
    e.persist();
    e.preventDefault();

    try {
      setIsLoading(true);
      await axios.delete(`/aprendiz/${id}`);
      const novosAlunosDel = [...mostraAlunos];
      novosAlunosDel.splice(index, 1);
      setMostraAlunos(novosAlunosDel);
      setAlunos(novosAlunosDel);
      setIsLoading(false);
      toast.success(`Aluno(a) ${alunos[index].nome} deletado(a) com sucesso!`);
    } catch (err) {
      const status = Lodash.get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('É necessário estar logado!');
      } else {
        toast.error('Ocorreu um erro, tente novamente mais tarde! ');
      }

      setIsLoading(false);
    }
  };

  let open = false;
  function handleSearch() {
    const search = document.querySelector('.search');
    if (!open) {
      search.setAttribute('class', 'search flex');
      open = true;
    } else {
      search.setAttribute('class', 'search none');
      open = false;
    }
  }

  async function askSearch() {
    const search = document.querySelector('.search');
    const filtro = await search.value.toUpperCase();
    const novosSearchAlunos = [];

    alunos.map((aluno) => {
      if (aluno.nome.toUpperCase().indexOf(filtro) !== -1) {
        novosSearchAlunos.push(aluno);
      }
    });
    setMostraAlunos(novosSearchAlunos);
  }

  function handleNewStudent() {
    history.push('/aprendiz/');
  }

  function handleStudent(e, aluno) {
    const el = e.target;
    if (
      el.classList.contains('delete') ||
      el.classList.contains('exclamation')
    ) {
      return e.preventDefault();
    } else {
      history.push(`/aprendiz/${aluno.id}`);
    }
  }

  return (
    <Opacity>
      {id ? (
        <>
          <Loading isLoading={isLoading} />

          {alunos.length < 1 ? (
            <Limpo>
              <h1>Ainda não temos alunos salvos!</h1>
              <img src="/img/alunosLimpo.svg" alt="Ilustração lista vazia" />
              <button onClick={handleNewStudent}>
                Criar primeiro aluno <AiOutlineUserAdd size={26} />
              </button>
            </Limpo>
          ) : (
            <Container>
              <Search className="flex">
                <h1>Meus alunos </h1>
                <div>
                  <input
                    type="text"
                    value={search}
                    className="none search"
                    onChange={(e) => {
                      setSearch(e.target.value);
                      askSearch();
                    }}
                  />
                  <BiSearchAlt2
                    size={30}
                    className="click"
                    onClick={handleSearch}
                  />
                </div>
              </Search>

              <AlunoContainer>
                {mostraAlunos.map((aluno, index) => (
                  <div
                    key={String(aluno.id)}
                    className="alunos"
                    onClick={(e) => handleStudent(e, aluno)}
                  >
                    <ProfilePicture>
                      {Lodash.get(aluno, 'Fotos[0].url', false) ? (
                        <img crossOrigin="" src={aluno.Fotos[0].url} alt="" /> //se verdadeiro
                      ) : (
                        <FaUserCircle size={36} /> // se falso
                      )}
                    </ProfilePicture>

                    <span className="nome">{aluno.nome}</span>
                    <span className="email">{aluno.email}</span>

                    <div>
                      <Link onClick={handleDeleteAsk} to="">
                        <FaWindowClose className="delete" size={16} />
                      </Link>
                      <FaExclamation
                        size={8}
                        className="exclamation none"
                        onClick={(e) => handleDelete(e, aluno.id, index)}
                      />
                    </div>
                  </div>
                ))}
              </AlunoContainer>
              <NovoAluno to="/aprendiz/" className="addAluno">
                <Link className="content" to="/aprendiz">
                  Novo aluno <AiOutlineUserAdd />
                </Link>
              </NovoAluno>
            </Container>
          )}
        </>
      ) : (
        <>
          <Content>
            <img src={Welcome} alt="" />
            <Link to="/register">Criar minha conta</Link>
          </Content>
        </>
      )}
    </Opacity>
  );
}
