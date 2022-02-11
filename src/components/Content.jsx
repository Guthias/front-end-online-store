import React, { Component } from 'react';
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
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route path="/Product/:id" component={ ProductDetails } />
      </Switch>
    );
  }
}
