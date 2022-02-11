import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <div className="product" data-testid="product">
        <Link to={ `product/${id}` }>
          <div className="product-area-image">
            <img className="product-image" src={ thumbnail } alt={ title } />
          </div>

          <div className="product-details">
            <span className="product-price">{ `R$ ${price}` }</span>
            <span className="product-title">{ title }</span>
          </div>
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
