import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#">
      <input type="text" onChange={handleChange} value={novaTarefa} />
      <button type="submit">Enviar</button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
