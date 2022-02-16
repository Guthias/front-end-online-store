import React, { Component } from 'react';

export default class ProductValuation extends Component {
  render() {
    return (
      <div className="product-valuation">
        <h2>Opiniões sobre o Produto</h2>
        <form className="product-valuation-form">
          <label htmlFor="user-valuation-email">
            E-mail
            <input
              id="user-valuation-email"
              type="text"
              name="rating"
              data-testid="product-detail-email"
            />
          </label>
          <label htmlFor="user-valuation-email">
            Comentario
            <textarea
              id="user-valuation-description"
              name="review"
              data-testid="product-detail-evaluation"
            />
          </label>
          <div className="user-valuation-rating">
            <label htmlFor="user-rating-1">
              1
              <input
                id="user-rating-1"
                type="radio"
                data-testid="1-rating"
                name="rating"
                value="1"
              />
            </label>

            <label htmlFor="user-rating-2">
              2
              <input
                id="user-rating-2"
                type="radio"
                data-testid="2-rating"
                name="rating"
                value="2"
              />
            </label>

            <label htmlFor="user-rating-3">
              3
              <input
                id="user-rating-3"
                type="radio"
                data-testid="3-rating"
                name="rating"
                value="3"
              />
            </label>

            <label htmlFor="user-rating-4">
              4
              <input
                id="user-rating-4"
                type="radio"
                data-testid="4-rating"
                name="rating"
                value="4"
              />
            </label>

            <label htmlFor="user-rating-5">
              5
              <input
                id="user-rating-5"
                type="radio"
                data-testid="5-rating"
                name="rating"
                value="5"
              />
            </label>
          </div>
          <button type="submit">Enviar Avaliação</button>
        </form>
      </div>
    );
  }
}
