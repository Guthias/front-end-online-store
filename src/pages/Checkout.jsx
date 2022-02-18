import React, { Component } from 'react';
import * as api from '../services/api';

export default class Checkout extends Component {
  state = {
    productCart: [],
  }

  componentDidMount() {
    const allProduct = api.getLocalStorage('cartProducts');
    this.setState({ productCart: allProduct });
  }

  render() {
    const { productCart } = this.state;

    return (
      <>
        {productCart.map((product) => <p key={ product.id }>{product.id}</p>)}
      </>

    );
  }
}
