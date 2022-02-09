import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div className="product" data-testid="product">
        <div className="product-area-image">
          <img className="product-image" src={ thumbnail } alt={ title } />
        </div>

        <div className="product-details">
          <span>{ title }</span>
          <span>{ `R$ ${price}` }</span>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
