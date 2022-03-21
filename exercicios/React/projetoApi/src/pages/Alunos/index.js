import React from 'react';
import Lodash from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture, NovoAluno } from './styled';
import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const id = useSelector((state) => state.auth.user.id);

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get('/aprendiz');
        setAlunos(response.data);
        setIsLoading(false);
      } catch (err) {
        const status = Lodash.get(err, 'response.status', 0);

        if (status === 401) {
          toast.error('É necessário estar logado!');
        } else {
          toast.error('Ocorreu um erro, tente novamente mais tarde! ');
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

    console.log(e.currentTarget.nextSibling);

    el.setAttribute('class', 'block exclamation');
    close.setAttribute('class', 'none');

    document.addEventListener('click', function fn(click) {
      const clique = click.target;
      if (
        !clique.classList.contains('exclamation') &&
        !clique.classList.contains('delete')
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

    try {
      setIsLoading(true);
      await axios.delete(`/aprendiz/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
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

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Meus alunos </h1>

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <Link to={`/aprendiz/${aluno.id}`} className="alunos">
              <ProfilePicture>
                {Lodash.get(aluno, 'Fotos[0].url', false) ? (
                  <img crossOrigin="" src={aluno.Fotos[0].url} alt="" /> //se verdadeiro
                ) : (
                  <FaUserCircle size={36} /> // se falso
                )}
              </ProfilePicture>

              <span className="nome">{aluno.nome}</span>
              <span className="email">{aluno.email}</span>
              {id ? (
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
              ) : (
                ''
              )}
            </Link>
          </div>
        ))}
      </AlunoContainer>
      <NovoAluno to="/aprendiz/" className="addAluno">
        <Link className="content" to="/aprendiz">
          Novo aluno <AiOutlineUserAdd />
        </Link>
      </NovoAluno>
    </Container>
  );
}
