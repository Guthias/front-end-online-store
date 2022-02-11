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
    const { title } = this.state.productDetails;
    return (
      <div>
        <h2 datatest-id="product-detail-name">{ title }</h2>
      </div>
    );
  }
}
