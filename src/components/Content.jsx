import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetails from '../pages/ProductDetails';

export default class Content extends Component {
  render() {
    const { addToCart } = this.props;

    return (
      <Switch>
        <Route exact path="/" render={ () => <Home addToCart={ addToCart } /> } />
        <Route path="/cart" render={ () => <ShoppingCart { ...this.props } /> } />
        <Route
          path="/Product/:id"
          render={ ({ match }) => (<ProductDetails
            addToCart={ addToCart }
            { ...match }
          />) }
        />
      </Switch>
    );
  }
}

Content.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
