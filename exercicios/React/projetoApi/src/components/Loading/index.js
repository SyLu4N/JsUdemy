import React from 'react';
import PropTypes from 'prop-types';
import { RiLoader2Line } from 'react-icons/ri';

import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div>
        <span className="loading">
          <RiLoader2Line size={55} />
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
