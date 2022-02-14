import React, { Component } from 'react';
import ProtoTypes from 'prop-types';
import * as api from '../../services/api';
import './style.css';

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
    const { categoryClick } = this.props;

    return (
      <div>
        <div className="category-list">
          { allCategory.map((elem) => (
            <label htmlFor={ elem.id } key={ elem.id } data-testid="category">
              <input
                id={ elem.id }
                value={ elem.id }
                className="category-input"
                name="category"
                onChange={ categoryClick }
                type="radio"
              />
              <span className="category-item">
                { elem.name }
              </span>
            </label>
          ))}
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  categoryClick: ProtoTypes.func.isRequired,
};

export default Category;
