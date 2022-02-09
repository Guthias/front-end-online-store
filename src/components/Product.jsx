import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
      <div>
        <div className="product-area-image">
          <img className="product-image" src="" alt="" />
        </div>

        <div className="product-details">
          <span>Product Name</span>
          <span>R$ 99.00 </span>
        </div>
      </div>
    );
  }
}
