import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCart extends Component {
  render() {
    const { thumbnail, title, price } = this.props;
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
      </div>
    );
  }
}

ProductCart.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
