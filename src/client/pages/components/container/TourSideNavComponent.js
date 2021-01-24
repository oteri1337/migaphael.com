import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "providers/AppProvider";
import UserSideNavComponent from "./UserSideNavComponent";

function TourSideNavComponent() {
  const { state, callReducer } = React.useContext(AppContext);

  if (state.user) {
    return <UserSideNavComponent />;
  }

  React.useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  }, []);

  return (
    <ul className="sidenav" id="mobile-demo">
      <li>
        <div className="user-view">
          <div className="background">
            <center>
              <img src="/assets/images/logo.png" style={{ height: "170px" }} />
            </center>
          </div>
        </div>
      </li>

      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li className="active">
            <a className="collapsible-header">
              Shop
              <i className="material-icons notranslate">arrow_drop_down</i>
            </a>
            <div className="collapsible-body">
              <ul>
                <li>
                  <Link
                    to="/shop/categories/list.html"
                    className="sidenav-close">
                    <span className="material-icons notranslate">category</span>
                    Categories
                  </Link>
                </li>

                <li>
                  <Link to="/shop/products.html" className="sidenav-close">
                    <span className="material-icons notranslate">
                      shopping_cart
                    </span>
                    All Products
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>

      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li className="active">
            <a className="collapsible-header">
              Pages
              <i className="material-icons notranslate">arrow_drop_down</i>
            </a>
            <div className="collapsible-body">
              <ul>
                <li>
                  <Link to="/signin.html" className="sidenav-close">
                    <span className="material-icons notranslate">
                      account_circle
                    </span>
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/signup.html" className="sidenav-close">
                    <span className="material-icons notranslate">
                      person_add
                    </span>
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>

      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li className="active">
            <a className="collapsible-header">
              Theme
              <i className="material-icons notranslate">arrow_drop_down</i>
            </a>
            <div className="collapsible-body">
              <ul>
                <li>
                  <a
                    className="sidenav-close"
                    onClick={() =>
                      callReducer({ dispatch: "UPDATE_THEME", data: "DARK" })
                    }>
                    <span className="material-icons notranslate">bookmark</span>
                    Dark
                  </a>
                </li>
                <li>
                  <a
                    className="sidenav-close"
                    onClick={() =>
                      callReducer({ dispatch: "UPDATE_THEME", data: "LIGHT" })
                    }>
                    <span className="material-icons notranslate">
                      bookmark_border
                    </span>
                    Light
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default TourSideNavComponent;
