import React, { Component } from 'react';

export default class ProductValuation extends Component {
  state = {
    email: '',
    review: '',
    rating: '',
    valuations: [],
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  isInputChecked = (inputRating) => {
    const { rating } = this.state;
    return inputRating === rating;
  }

  saveReview = (event) => {
    event.preventDefault();
    const { email, review, rating, valuations } = this.state;
    this.setState({
      email: '',
      review: '',
      rating: '',
      valuations: [...valuations, { email, review, rating }],
    });
  }

  render() {
    const { email, review } = this.state;

    return (
      <div className="product-valuation">
        <h2>Opiniões sobre o Produto</h2>
        <form className="product-valuation-form">
          <label htmlFor="user-valuation-email">
            E-mail
            <input
              id="user-valuation-email"
              type="text"
              name="email"
              onChange={ this.handleChange }
              value={ email }
              data-testid="product-detail-email"
            />
          </label>
          <label htmlFor="user-valuation-email">
            Comentario
            <textarea
              id="user-valuation-description"
              name="review"
              value={ review }
              onChange={ this.handleChange }
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
                checked={ this.isInputChecked('1') }
                onChange={ this.handleChange }
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
                checked={ this.isInputChecked('2') }
                onChange={ this.handleChange }
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
                checked={ this.isInputChecked('3') }
                onChange={ this.handleChange }
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
                checked={ this.isInputChecked('4') }
                onChange={ this.handleChange }
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
                checked={ this.isInputChecked('5') }
                onChange={ this.handleChange }
                name="rating"
                value="5"
              />
            </label>
          </div>
          <button type="submit" onClick={ this.saveReview }>
            Enviar Avaliação
          </button>
        </form>
      </div>
    );
  }
}
