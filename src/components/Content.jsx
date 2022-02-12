import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetails from '../pages/ProductDetails';

export default class Content extends Component {
  render() {
    const { addToCart, cart } = this.props;

    return (
      <Switch>
        <Route exact path="/" render={ () => <Home addToCart={ addToCart } /> } />
        <Route path="/ShoppingCart" render={ () => <ShoppingCart cart={ cart } /> } />
        <Route path="/Product/:id" component={ ProductDetails } />
      </Switch>
    );
  }
}

Content.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};
