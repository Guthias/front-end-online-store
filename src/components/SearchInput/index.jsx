import React from 'react';
import ProtoTypes from 'prop-types';
import './style.css';

export default function SearchInput(props) {
  const { inputValue, inputChange, buttonSubmit } = props;
  return (
    <form>
      <label htmlFor="query-input" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <div className="search-input">
          <input
            id="query-input"
            value={ inputValue }
            onChange={ inputChange }
            data-testid="query-input"
            type="text"
          />
          <button
            type="submit"
            onClick={ buttonSubmit }
            data-testid="query-button"
          >
            Pesquisar
          </button>
        </div>
      </label>
    </form>
  );
}

SearchInput.propTypes = {
  inputValue: ProtoTypes.string.isRequired,
  inputChange: ProtoTypes.func.isRequired,
  buttonSubmit: ProtoTypes.func.isRequired,
};
