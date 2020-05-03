import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils.js";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/clothing-app/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/clothing-app/shop">
        SHOP
      </Link>
      <Link className="option" to="/clothing-app/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/clothing-app/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
