import React, { Component } from 'react';
import * as api from '../services/api';
import Product from './Product';

class Category extends Component {
    state = {
      allCategory: [],
      allProduct: [],

    };

  componentDidMount = async () => {
    this.setState({
      allCategory: await api.getCategories(),

    });
  }

  handleClick = async ({ target }) => {
    const { results } = await api.getCategoriesId(target.value);
    this.setState({
      allProduct: results,
    });
  };

  render() {
    const { allCategory, allProduct } = this.state;
    return (
      <div>
        <div className="category-list">
          { allCategory.map((elem) => (
            <label htmlFor={ elem.id } key={ elem.id } data-testid="category">
              { elem.name }
              <input
                id={ elem.id }
                value={ elem.id }
                name="category"
                onChange={ this.handleClick }
                type="radio"
              />
            </label>
          ))}
        </div>
        <div>
          {allProduct.map((product) => (
            <Product key={ product.id } { ...product } />
          ))}
        </div>
      </div>
    );
  }
}

export default Category;
