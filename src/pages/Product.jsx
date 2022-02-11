import React, { Component } from 'react';
import Prototypes from 'prop-types';
import * as api from '../services/api';

export default class Product extends Component {
  state = {
    productDetails: {},
    loading: true,
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({ productDetails: await api.getProductDetails(id), loading: false });
  }

  render() {
    const { loading, productDetails: { title, price, pictures } } = this.state;

    return (
      loading ? <p>Carregando...</p>
        : (
          <div className="product-details-area">
            <div className="">
              <img className="" src={ pictures[0].url } alt={ title } />
            </div>
            <div className="product-details">
              <h2 data-testid="product-detail-name">{ title }</h2>
              <h3 className="product-price">{ `R$ ${price.toFixed(2)}` }</h3>
            </div>
          </div>
        )
    );
  }
}

Product.propTypes = { match: Prototypes.shape({
  params: Prototypes.shape({
    id: Prototypes.string.isRequired,
  }).isRequired,
}).isRequired };
