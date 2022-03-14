import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Form.css';

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return(
    <form onSubmit={handleSubmit} action="#" className="form">
    <input
      className="input"
      onChange={handleChange}
      type="text"
      value={novaTarefa}
    />
    <button className="button" type="submit">
      <FaPlus />
    </button>
  </form>
  );
}


Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}
