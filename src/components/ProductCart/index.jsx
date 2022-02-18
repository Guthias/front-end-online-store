import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTruck } from 'react-icons/fa';
import './style.css';

export default class ProductCart extends Component {
  render() {
    const { thumbnail, title, price, quantity, increaseCart, decreaseCart,
      shipping: { free_shipping: freeShipping } } = this.props;
    return (
      <div className="cart-product">
        <div className="cart-product-image-area">
          <img className="cart-product-image" src={ thumbnail } alt={ title } />
        </div>
        <div className="cart-product-details">
          <div className="cart-product-details-row">
            <span data-testid="shopping-cart-product-name">
              { title }
            </span>
            <span className="cart-product-price">
              { `R$ ${price.toFixed(2)}` }
            </span>
          </div>
          <div className="cart-product-details-row">
            {
              freeShipping && (
                <span data-testid="free-shipping" className="free-shipping">
                  <FaTruck className="free-shipping-icon" />
                  Frete Grátis
                </span>)
            }

            <div className="product-quantity-area">
              <button
                type="button"
                className="product-quantity-button"
                data-testid="product-decrease-quantity"
                onClick={ decreaseCart }
              >
                -
              </button>
              <span
                data-testid="shopping-cart-product-quantity"
                className="product-quantity-number"
              >
                { quantity }
              </span>
              <button
                type="button"
                className="product-quantity-button"
                data-testid="product-increase-quantity"
                onClick={ increaseCart }
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductCart.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  increaseCart: PropTypes.func.isRequired,
  decreaseCart: PropTypes.func.isRequired,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool.isRequired,
  }).isRequired,
};
