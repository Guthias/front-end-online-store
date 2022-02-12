import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCart extends Component {
  render() {
    const { thumbnail, title, price, quantity } = this.props;
    return (
      <div>
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div data-testid="shopping-cart-product-name">
          { title }
        </div>
        <div>
          { price }
        </div>
        <div>
          <button
            type="button"
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          { quantity }
          <button
            type="button"
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

ProductCart.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
