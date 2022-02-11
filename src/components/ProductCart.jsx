import React, { Component } from 'react';

export default class ProductCart extends Component {
  render() {
    const { thumbnail, title, price, cartLength } = this.props;
    return (
      <div>
        <div>
          <img src={ thumbnail } alt="" />
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
