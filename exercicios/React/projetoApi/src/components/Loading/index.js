import React from 'react';
import PropTypes from 'prop-types';
import { BiLoaderCircle } from 'react-icons/bi';

import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div>
        <span className="loading">
          <BiLoaderCircle size={55} />
        </span>
        <span className="text">Carregando...</span>
      </div>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
