import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NavComponent from "./TourNavComponent";
import BreadComponent from "./BreadComponent";
import FooterComponent from "./TourFooterComponent";
import SideNavComponent from "./TourSideNavComponent";
import { CSSTransition } from "react-transition-group";
import SearchComponent from "components/SearchComponent";

function ContainerComponent(props) {
  const bread = props.bread || [];
  const title = bread[bread.length - 1]?.label || "";

  React.useEffect(() => {
    scrollTo(0, 0);
  }, []);

  React.useLayoutEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }, []);

  const renderFooter = () => {
    const params = new URLSearchParams(location.search);
    const pwa = params.get("pwa") || props.hideFooter;

    if (!pwa) {
      return <FooterComponent />;
    }
  };

  const renderBread = () => {
    if (props.bread) {
      return (
        <React.Fragment>
          <div className="bg bg-page">
            <BreadComponent data={props.bread} className="container" />
          </div>
        </React.Fragment>
      );
    }
    return <Helmet title={PWA_NAME} />;
  };

  return (
    <React.Fragment>
      <main style={{ minHeight: "75vh" }} className={props.className}>
        <NavComponent />
        <SideNavComponent />
        <div className="bg bg-secondary hide-on-med-and-down">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">Hotline: +234 803 192 0968</div>
              <div className="col l6 s12">
                <Link to="/signin.html" className="app-px-1">
                  My account
                </Link>
                <Link to="/signin.html" className="app-px-1">
                  Cart
                </Link>
                <Link to="/signin.html" className="app-px-1">
                  Wishlist
                </Link>
                <Link to="/signin.html" className="app-px-1">
                  Checkout
                </Link>
                <Link to="/signin.html" className="app-px-1">
                  Store Manager
                </Link>
                <Link to="/signin.html">Store List</Link>
              </div>
            </div>
            <div className="row app-py-3">
              <div className="col l3 s12">
                <h1>{PWA_NAME}</h1>
              </div>
              <div className="col l5 s12">
                <SearchComponent />
              </div>
              <div className="col l4 s12">
                <div className="row center">
                  <div className="col l4 s12">
                    <div>
                      <span className="material-icons notranslate">
                        check_circle_outline
                      </span>
                      <br />
                      Same Day Delivery
                    </div>
                  </div>

                  <div className="col l4 s12">
                    <div>
                      <span className="material-icons notranslate">
                        enhanced_encryption
                      </span>
                      <br />
                      Safe
                      <br /> Payment
                    </div>
                  </div>

                  <div className="col l4 s12">
                    <div>
                      <span className="material-icons notranslate">
                        notifications_none
                      </span>
                      <br />
                      24/7
                      <br /> Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {renderBread()}
        <CSSTransition classNames="fade" in={true} appear={true} timeout={300}>
          <div>
            <br />
            {props.children}
          </div>
        </CSSTransition>
      </main>
      {renderFooter()}
    </React.Fragment>
  );
}

export default ContainerComponent;
