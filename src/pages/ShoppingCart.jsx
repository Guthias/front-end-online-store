import React from 'react';
import ProductCart from '../components/ProductCart';
import * as api from '../services/api';

class ShoppingCart extends React.Component {
  state = {
    productDetails: [],
    loading: true,
  }

  async componentDidMount() {
    const { cart } = this.props;
    const productPromises = cart.map((id) => api.getProductDetails(id));
    const productDetails = await Promise.all(productPromises);
    this.setState({ productDetails, loading: false });
  }

  render() {
    const { productDetails, loading } = this.state;
    const { cart } = this.props;

    return (
      loading ? <p>Carregando...</p>
        : (
          <div>
            {cart.length ? productDetails.map((product) => <ProductCart key={ product.id } { ...product } /> )
              : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>}
          </div>
        )
    );
  }
}
export default ShoppingCart;
