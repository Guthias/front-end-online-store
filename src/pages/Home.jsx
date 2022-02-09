import React, { Component } from 'react';
import Category from '../components/Category';

class Home extends Component {
  render() {
    return (
      <main>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Category />
      </main>
    );
  }
}

export default Home;
