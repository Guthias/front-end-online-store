import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';
import * as api from '../services/api';

class ShoppingCart extends React.Component {
  state = {
    productDetails: [],
    loading: true,
  }

  async componentDidMount() {
    const { cart } = this.props;
    // const productPromises = cart.map(({ id }) => api.getProductDetails(id));
    // const productDetails = await Promise.all(productPromises);

    const productPromises = cart.map(({ title }) => api.getProductQuery(title));
    const promiseResolved = await Promise.all(productPromises);
    const productResults = promiseResolved.map(({ results }) => results);

    const cartMap = cart.map(({ id }) => id);
    const productDetails = productResults
      .reduce((acc, products, index) => {
        const product = products.find(({ id }) => id === cartMap[index]);
        if (product) {
          acc.push(product);
        }
        return acc;
      }, []);
    this.setState({ productDetails, loading: false });
  }

  countCartItems = () => {
    const { cart } = this.props;
    return cart.reduce((acc, { quantity }) => acc + quantity, 0);
  }

  checkCartQuantity = (productId) => {
    const { cart } = this.props;
    return cart.find(({ id }) => id === productId).quantity;
  }

  handleClickCart = () => {
    const { productDetails } = this.state;
    api.saveLocalStorage('cartProducts', productDetails);
  }

  render() {
    const { productDetails, loading } = this.state;
    const { cart, increaseCart, decreaseCart } = this.props;
    return (
      loading ? <p>Carregando...</p>
        : (
          <div>
            {
              cart.length ? (
                <h2>
                  Quantidade Total de Produtos:
                  <span>
                    {this.countCartItems()}
                  </span>
                </h2>)
                : (
                  <h2 data-testid="shopping-cart-empty-message">
                    Seu carrinho est?? vazio
                  </h2>)
            }
            {
              cart.length > 0 && productDetails
                .map((product) => (
                  <ProductCart
                    key={ product.id }
                    { ...product }
                    increaseCart={
                      () => increaseCart(product.id, product.available_quantity)
                    }
                    decreaseCart={ () => decreaseCart(product.id) }
                    quantity={ this.checkCartQuantity(product.id) }
                  />))
            }
            <Link
              data-testid="checkout-products"
              to="/Checkout"
            >
              <button
                type="button"
                onClick={ this.handleClickCart() }
              >
                Finalizar Compra
              </button>
            </Link>

          </div>
        )
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  increaseCart: PropTypes.func.isRequired,
  decreaseCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
