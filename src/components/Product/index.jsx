import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

export default class Product extends Component {
  render() {
    const { title, price, thumbnail, id, addToCart } = this.props;
    return (
      <div className="product" data-testid="product">
        <Link to={ `product/${id}` } data-testid="product-detail-link">
          <div className="product-area-image">
            <img className="product-image" src={ thumbnail } alt={ title } />
          </div>

          <div className="product-details">
            <span className="product-price">{ `R$ ${price}` }</span>
            <span className="product-title">{ title }</span>
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addToCart(id) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};
