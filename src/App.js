import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  state = {
    cart: [],
  }

  addToCart = (id) => {
    const { cart } = this.state;
    this.setState({ cart: [...cart, id] });
  }

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
