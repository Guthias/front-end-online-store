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
  const getProducts = await api.getCategoriesId(target.value);
  console.log(getProducts.results);
  this.setState({
    allProduct: getProducts.results,
  });
};

render() {
  const { allCategory, allProduct } = this.state;
  console.log(allProduct);
  return (
    <div>
      <ul>
        { allCategory.map((elem) => (
          <li key={ elem.id } data-testid="category">
            { elem.name }
            <input
              value={ elem.id }
              name="category"
              onChange={ this.handleClick }
              type="radio"
            />
          </li>
        ))}
      </ul>
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
