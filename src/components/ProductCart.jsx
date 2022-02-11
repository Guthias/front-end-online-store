import React, { Component } from 'react';

export default class ProductCart extends Component {
  render() {
    const { pictures, title, price } = this.props;
    return (
      <div>
        <div>
          <img src={ pictures } alt="" />
        </div>
        <div datatest-id="shopping-cart-product-name">
          { title }
        </div>
        <div>
          { price }
        </div>
      </div>
    );
  }
}
