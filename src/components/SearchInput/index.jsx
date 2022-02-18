import React from 'react';
import ProtoTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import './style.css';

export default function SearchInput(props) {
  const { inputValue, inputChange, buttonSubmit } = props;
  return (
    <form className="search-form">
      <label htmlFor="query-input" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <div className="search-input-area">
          <input
            id="query-input"
            value={ inputValue }
            onChange={ inputChange }
            className="search-input"
            data-testid="query-input"
            type="text"
          />
          <button
            type="submit"
            className="search-button"
            onClick={ buttonSubmit }
            data-testid="query-button"
          >
            <FaSearch />
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
