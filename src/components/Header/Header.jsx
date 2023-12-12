import { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import cx from "classnames";

import { ReactComponent as Star } from "../../assets/icons/starIcon.svg";
import { ReactComponent as CartLogo } from "../../assets/icons/cart.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Square1 } from "../../assets/icons/square1.svg";
import { ReactComponent as Square4 } from "../../assets/icons/squere4.svg";

import { NewThemeContext } from "../../context/context";

import "./Header.scss";

function Header() {
  const { isTheme, setIsTheme } = useContext(NewThemeContext);

  const location = useLocation();
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  const square = !isTheme ? <Square1 /> : <Square4 />;

  const handelChangeTheme = () => {
    setIsTheme(!isTheme);
  };
  return (
    <>
      <div className="root">
        <div className="container">
          <div>
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <div className="wrap">
            {location.pathname === "/" && (
              <span className="theme" onClick={handelChangeTheme}>
                {square}
              </span>
            )}

            <Link className="header-icon" to="/favorites">
              <Star />
              <span>{favorites.length}</span>
            </Link>
            <Link className="header-icon" to="/cart">
              <CartLogo />
              <span>{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  favorites: PropTypes.array,
  cart: PropTypes.array,
};

export default Header;
