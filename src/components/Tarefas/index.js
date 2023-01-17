import React from 'react';
import PropTypes from 'prop-types';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <div>
      <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={tarefa}>
            {tarefa}
            <button
              onClick={(e) => {
                handleEdit(e, index);
              }}
            >
              EDITAR
            </button>
            <button
              onClick={(e) => {
                handleDelete(e, index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
