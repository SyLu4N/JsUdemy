import React from 'react';
import Lodash from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';
import { ProfilePicture, Content } from '../Fotos/styled';

export default function Fotos({ match }) {
  const dispatch = useDispatch();

  const id = Lodash.get(match, 'params.id', '');

  const [isLoading, setIsLoading] = React.useState(false);
  const [foto, setFoto] = React.useState('');
  const [fotos, setFotos] = React.useState('');

  React.useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/aprendiz/${id}`);
        setFoto(Lodash.get(data, 'Fotos[0].url', ''));
        setFotos(Lodash.get(data, 'Fotos', ''));
        setIsLoading(false);
      } catch {
        toast.error('Erro, tente novamente mais tarde!');
        setIsLoading(false);
        history.push('/');
      }
    };

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

  function handlePerfil(e, index) {
    console.log(e.target.src);

    fotos.splice(0, 0, fotos.splice(index, 1)[0]);
    setFotos(fotos);
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
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>

      {fotos.length > 0 ? <Title>Sua galeria</Title> : ''}
      <Content>
        <ProfilePicture>
          {console.log(fotos)}
          {fotos
            ? fotos.map((galeria, index) => (
                <div key={String(index)}>
                  <img
                    crossOrigin=""
                    src={galeria.url}
                    alt="Foto aluno"
                    onClick={(e) => handlePerfil(e, index)}
                  />
                </div>
              ))
            : ''}
        </ProfilePicture>
      </Content>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
