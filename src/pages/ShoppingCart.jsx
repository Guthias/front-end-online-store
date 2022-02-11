import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const { cart } = this.props;

    return (
      <div>
        {cart.length ? cart.map((product) => <div key={ product }>{ product }</div> )
          : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>}
      </div>
    );
  }
}
export default ShoppingCart;
