import React, { Component } from 'react';

class Home extends Component {
  state = {
    queryInput: '',
  }

  render() {
    const { queryInput } = this.state;

    return (
      <main>
        <form>
          <label htmlFor="query-input" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <div className="search-input">
              <input
                id="query-input"
                value={ queryInput }
                data-testid="query-input"
                type="text"
              />
              <button type="submit">Pesquisar</button>
            </div>
          </label>
        </form>
      </main>
    );
  }
}

export default Home;
