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

handleClick = async ({ target }) => {
  const { allCategory } = this.state;
  // allCategory.find((element) => {
  //   target.value
  // })
  console.log(target.value);
  console.log(allCategory);
  // target.value === on && this.setState({})
  // this.setState({ value: true });
  // const listProducts = await getCategoriesId(categoryId);
  // console.log(listProducts);
};

render() {
  const { allCategory } = this.state;
  return (
    <div>
      <ul>
        { allCategory.map((elem) => (
          <li key={ elem.id } data-testid="category">
            { elem.name }
            <input
              value={ elem.id }
              name="category"
              onChange={ this.handleClick }
              type="radio"
            />
          </li>
        ))}
      </ul>
    </div>

  );
}
}

export default Category;
