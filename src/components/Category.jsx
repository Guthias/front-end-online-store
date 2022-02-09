import React, { Component } from 'react';
import * as api from '../services/api';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      allCategory: [],
    };
  }

  componentDidMount = async () => {
    const getApiCategory = await api.getCategories();
    this.setState({
      allCategory: getApiCategory,
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
