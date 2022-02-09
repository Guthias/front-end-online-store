import React, { Component } from 'react';
import * as api from '../services/api.js';

class Home extends Component {
  state = {
    queryInput: '',
    searchedProducts: [],
  }

  handleChange = ({ target }) => {
    this.setState({ queryInput: target.value });
  }

  searchButton = async (event) => {
    event.preventDefault();
    const { queryInput } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery('MLB5672', queryInput);
    this.setState({ searchedProducts: results });
  }

  render() {
    const { queryInput } = this.state;

    return (
      <main>
        <form>
          <label htmlFor="query-input" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <div className="search-input">
              <input
                id="query-input"
                value={ queryInput }
                onChange={ this.handleChange }
                data-testid="query-input"
                type="text"
              />
              <button type="submit" onClick={ this.searchButton }>Pesquisar</button>
            </div>
          </label>

          <div className="product-area" />
        </form>
      </main>
    );
  }
}

export default Home;
