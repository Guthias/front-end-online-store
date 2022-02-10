import React, { Component } from 'react';
import Category from '../components/Category';
import * as api from '../services/api';
import Product from '../components/Product';

class Home extends Component {
  state = {
    queryInput: '',
    searchedProducts: [],
    searched: false,
  }

  handleChange = ({ target }) => {
    this.setState({ queryInput: target.value });
  }

  searchButton = async (event) => {
    event.preventDefault();
    const { queryInput } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery('MLB5672', queryInput);
    this.setState({ searchedProducts: results, searched: true });
  }

  render() {
    const { queryInput, searchedProducts, searched } = this.state;

    return (
      <main className="page-container">
        <Category />
        <div className="page-content">
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
                <button
                  type="submit"
                  onClick={ this.searchButton }
                  data-testid="query-button"
                >
                  Pesquisar
                </button>
              </div>
            </label>
          </form>
          <div className="product-area">
            { searchedProducts.length > 0
              ? searchedProducts
                .map((product) => <Product key={ product.id } { ...product } />)
              : searched && <span>Nenhum produto foi encontrado</span> }
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
