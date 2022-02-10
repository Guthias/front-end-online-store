import React, { Component } from 'react';
import ProtoTypes from 'prop-types';
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
    const { categoryClick } = this.props;

    return (
      <div>
        <div className="category-list">
          { allCategory.map((elem) => (
            <label htmlFor={ elem.id } key={ elem.id } data-testid="category">
              { elem.name }
              <input
                id={ elem.id }
                value={ elem.id }
                name="category"
                onChange={ categoryClick }
                type="radio"
              />
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
