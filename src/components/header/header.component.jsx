import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className='logo-container' to="/clothing-app/">
      <Logo className="logo" />
    </Link>
    <div className='options'>
        <Link className='option' to='/clothing-app/shop'>
            SHOP
        </Link>
        <Link className='option' to='/clothing-app/contact'>
            CONTACT
        </Link>
    </div>
  </div>
);

export default Header;