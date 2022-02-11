import React, { Component } from 'react';
import Category from '../components/Category';
import * as api from '../services/api';
import Product from '../components/Product';
import SearchInput from '../components/SearchInput';

class Home extends Component {
  state = {
    queryInput: '',
    searchedProducts: [],
    searched: false,
    category: '',
  }

  handleChange = ({ target }) => {
    this.setState({ queryInput: target.value });
  }

  handleCategory = async ({ target }) => {
    const { results } = await api.getCategoriesId(target.value);
    this.setState({
      searchedProducts: results,
      category: target.value,
    });
  };

  searchButton = async (event) => {
    event.preventDefault();
    const { queryInput, category } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery(category, queryInput);
    this.setState({ searchedProducts: results, searched: true });
  }

  render() {
    const { queryInput, searchedProducts, searched } = this.state;
    const { addToCart } = this.props;

    return (
      <main className="page-container">
        <Category categoryClick={ this.handleCategory } />
        <div className="page-content">
          <SearchInput
            inputValue={ queryInput }
            inputChange={ this.handleChange }
            buttonSubmit={ this.searchButton }
          />
          <div className="product-area">
            { searchedProducts.length > 0
              ? searchedProducts
                .map((product) => <Product key={ product.id } { ...product } addToCart={ addToCart } />)
              : searched && <span>Nenhum produto foi encontrado</span> }
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
