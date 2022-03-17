import React from 'react';
import Lodash from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai';

import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';
import { Style } from './styled';
import { Link } from 'react-router-dom';

export default function Home() {
  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);

  return (
    <Container>
      <h1>MySchool</h1>

      <Style>
        <Link to={'/alunos'}>
          <AiOutlineUser /> Alunos
        </Link>
        <Link to={'/aluno/'}>
          Cadastrar novo aluno <AiOutlineUserAdd />
        </Link>
      </Style>
    </Container>
  );
}
