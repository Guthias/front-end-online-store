import React, { Component } from 'react';
import * as api from '../services/api';

export default class Product extends Component {
  state = {
    productDetails: {},
  }

  async componentDidMount() {
    const { match: { params: { id }}} = this.props;
    this.setState({ productDetails: await api.getProductDetails(id) });
  }

  render() {
    const { productDetails: { title } } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
      </div>
    );
  }
}
