import React, { Component } from 'react';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
        </main>
      </>
    );
  }
}

export default Home;
