import React, { Component } from 'react';
import * as api from '../services/api';

export default class Checkout extends Component {
  state = {
    productCart: [],
  }

  componentDidMount() {
    const allProduct = api.getLocalStorage('cartProducts');
    this.setState({ productCart: allProduct });
  }

  render() {
    const { productCart } = this.state;
    const totalPrice = (productCart.reduce(
      (acc, { price }) => acc + price, 0,
    )).toFixed(2);

    return (
      <>
        <section>
          <h3>Revise seu pedido</h3>
          {productCart.map((product) => (
            <div key={ product.id }>
              <h4>{product.title}</h4>
              <div>
                <img src={ product.thumbnail } alt={ product.title } />
              </div>
              <p>{product.price}</p>
            </div>))}
          <div>
            <h4>Valor Total</h4>
            <p>{totalPrice}</p>
          </div>
        </section>
        <section>
          <h3>Informações do comprador</h3>
          <input
            type="text"
            placeholder="Nome completo"
            data-testid="checkout-fullname"
          />
          <input
            type="email"
            placeholder="Email"
            data-testid="checkout-email"
          />
          <input
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
          />
          <input
            type="text"
            placeholder="Telefone"
            data-testid="checkout-phone"
          />
          <input
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep"
          />
          <textarea
            placeholder="Endereço"
            data-testid="checkout-address"
          />
        </section>
        <button type="button">Finalizar compra</button>
      </>
    );
  }
}
