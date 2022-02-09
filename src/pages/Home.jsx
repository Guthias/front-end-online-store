import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <main>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </main>
    );
  }
}

export default Home;
