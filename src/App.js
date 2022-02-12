import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  state = {
    cart: [],
  }

  newCartItem = (productId) => ({
    id: productId,
    quantity: 1,
  })

  addToCart = (productId) => {
    const { cart } = this.state;
    let productOnCart = cart.find(({ id }) => productId === id);
    const newCart = [...cart];
    if (productOnCart) {
      productOnCart.quantity += 1;
    } else {
      productOnCart = this.newCartItem(productId);
      newCart.push(productOnCart);
    }
    this.setState({ cart: newCart });
  };

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <Content addToCart={ this.addToCart } cart={ cart } />
      </BrowserRouter>
    );
  }
}

export default App;
