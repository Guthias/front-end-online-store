import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  state = {
    cart: [],
  }

  newCartItem = (productId, productTitle) => ({
    id: productId,
    title: productTitle,
    quantity: 1,
  })

  addToCart = (productId, productTitle) => {
    const { cart } = this.state;
    const newCart = [...cart];
    let productOnCart = newCart.find(({ id }) => productId === id);
    if (productOnCart) {
      this.increaseCart(productId);
    } else {
      productOnCart = this.newCartItem(productId, productTitle);
      newCart.push(productOnCart);
    }
    this.setState({ cart: newCart });
  };

  decreaseCart = (productId) => {
    const { cart } = this.state;
    const newCart = [...cart];
    const productOnCart = newCart.find(({ id }) => productId === id);
    if (productOnCart.quantity - 1 >= 1) {
      productOnCart.quantity -= 1;
      this.setState({ cart: newCart });
    }
  }

  increaseCart = (productId, maxQuantity) => {
    const { cart } = this.state;
    const newCart = [...cart];
    const productOnCart = newCart.find(({ id }) => productId === id);
    if (productOnCart.quantity + 1 <= maxQuantity) {
      productOnCart.quantity += 1;
      this.setState({ cart: newCart });
    }
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <Content
          addToCart={ this.addToCart }
          cart={ cart }
          increaseCart={ this.increaseCart }
          decreaseCart={ this.decreaseCart }
        />
      </BrowserRouter>
    );
  }
}

export default App;
