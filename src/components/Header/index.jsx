import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './style.css';

class Header extends React.Component {
  render() {
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
            to="/ShoppingCart"
          >
            <button
              type="button"
              className="cart-button"
            >
              <FaShoppingCart />
            </button>
          </Link>
        </div>
      </header>
    );
  }
}
export default Header;
