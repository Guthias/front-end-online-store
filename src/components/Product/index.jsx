import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTruck } from 'react-icons/fa';
import './style.css';

export default class Product extends Component {
  qualityImage = (thumbnail) => thumbnail.replace('I.jpg', 'O.jpg');

  render() {
    const { title, price, thumbnail, id, addToCart,
      shipping: { free_shipping: freeShipping } } = this.props;
    return (
      <div className="product" data-testid="product">
        <Link
          to={ `product/${id}` }
          data-testid="product-detail-link"
          className="product-info"
        >
          <div className="product-area-image">
            <img
              className="product-image"
              src={ this.qualityImage(thumbnail) }
              alt={ title }
            />
          </div>

          <div className="product-details">
            {
              freeShipping && (
                <span data-testid="free-shipping" className="free-shipping">
                  <FaTruck className="free-shipping-icon" />
                  Frete Grátis
                </span>)
            }
            <span className="product-price">{ `R$ ${price}` }</span>
            <span className="product-title">{ title }</span>
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          className="product-button"
          onClick={ () => addToCart(id, title) }
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
  shipping: PropTypes.objectOf.isRequired,
};
