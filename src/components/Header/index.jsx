import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './style.css';

class Header extends React.Component {
  render() {
    const { cartSize } = this.props;

    return (
      <header>
        <div className="header-title-area">
          <Link to="/">
            <h1 className="">Merenda</h1>
          </Link>
        </div>

        <div className="header-cart-area">
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
          >
            <button
              type="button"
              className="cart-button"
            >
              <FaShoppingCart />
              {
                cartSize > 0 && (
                  <div className="cart-quantity" data-testid="shopping-cart-size">
                    { cartSize }
                  </div>)
              }
            </button>
          </Link>
        </div>
      </header>
    );
  }
}
export default Header;
