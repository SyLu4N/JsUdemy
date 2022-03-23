import React from 'react';
import { Link } from 'react-router-dom';
import badPage from '../../images/404.svg';
import { Content } from './styled';

export default function Page404() {
  return (
    <Content>
      <img src={badPage} alt="" />
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para página principal</Link>
    </Content>
  );
}
