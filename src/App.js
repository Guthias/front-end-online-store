import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  addToCart = (id) => {
    console.log(id);
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Content addToCart={ this.addToCart } />
      </BrowserRouter>
    );
  }
}

export default App;
