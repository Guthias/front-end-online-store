import React from 'react';

export default function SearchInput() {
  const { inputValue, inputChange, buttonSubmit } = props;
  return (
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
  );
}
