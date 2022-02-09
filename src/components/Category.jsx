import React, { Component } from 'react';
import * as api from '../services/api';

class Category extends Component {
    state = {
      allCategory: [],
    };

  componentDidMount = async () => {
    this.setState({
      allCategory: await api.getCategories(),

    });
  }

  render() {
    const { allCategory } = this.state;
    return (
      <div>
        <ul>
          { allCategory.map((elem) => (
            <li key={ elem.id } data-testid="category">
              { elem.name }
              <input type="radio" />
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default Category;
