import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "providers/AppProvider";

function TourNavComponent() {
  const { state } = React.useContext(AppContext);
  const ci = Object.keys(state.cart).length;

  React.useLayoutEffect(() => {
    const dropdown = document.querySelectorAll(".dropdown-trigger");
    const options = {
      constrainWidth: false,
      coverTrigger: false,
      hover: true,
      closeOnClick: false,
    };
    if (window.M) {
      M.Dropdown.init(dropdown, options);
    }
  }, []);

  React.useLayoutEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  });

  return (
    <div className="navbar-fixed">
      <nav className="bg bg-secondary">
        <div className="container">
          <ul>
            <li>
              <a data-target="mobile-demo" className="sidenav-trigger ">
                <span className="material-icons notranslate">menu</span>
              </a>
            </li>
          </ul>
          <Link to="/" className="brand-logo hide-on-large-only">
            {PWA_NAME}
          </Link>
          <ul className=" hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop/products.html">SHOP</Link>
            </li>
            <li>
              <Link to="/about.html">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contact.html">CONTACT</Link>
            </li>
          </ul>

          <ul className="right">
            <li>
              <Link to="/shop/cart.html">W</Link>
            </li>

            <li>
              <Link to="/shop/cart.html">C</Link>
            </li>

            <li>
              <Link to="/shop/cart.html">
                <s>N</s>0.00
              </Link>
            </li>

            {/* <li>
              <Link to="/shop/cart.html">
                <span className="material-icons notranslate">shopping_cart</span> {ci}
              </Link>
            </li> */}
            {/* {renderSignIn()} */}
            {/* <li>
            <Link to="/signin.html" className="hover">
              <span
                className="material-icons notranslate"
                style={{ padding: 0 }}
              >
                account_circle
              </span>
            </Link>
          </li> */}

            {/* <li>
            <Link
              to="/shop/products.html"
              className="hover dropdown-trigger"
              data-target="shop">
              Shop
            </Link>
          </li>
          <ul id="shop" className="dropdown-content">
            <li>
              <Link to="/shop/categories/list.html">Categories</Link>
            </li>
            <li>
              <Link to="/shop/products.html">All Products</Link>
            </li>
          </ul>
          {renderUser()}
          <ThemeChangerNavComponent />
          <li>
            <Link to="/shop/cart.html" title="Cart">
              <span className="material-icons notranslate">shopping_cart</span>(
              {Object.keys(state.cart).length})
            </Link>
          </li>
          {renderSignIn()} */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default TourNavComponent;
