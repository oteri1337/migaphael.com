import React from "react";
import { format } from "functions/dom";
import { Link } from "react-router-dom";
import { getRequestThenDispatch } from "hooks";
import Search from "components/SearchComponent";
import ListComponent from "components/ListComponent";
import CategoryListComponent from "./components/CategoryListComponent";
import TourContainerComponent from "components/container/TourContainerComponent";

function HomePage() {
  const { state, callReducer, request } = getRequestThenDispatch(
    "/api/products",
    "UPDATE_PRODUCTS"
  );

  const { fetching } = request;

  let Container = TourContainerComponent;

  const list = state.products;

  const callback = function (props) {
    const renderCartButton = (data) => {
      if (state.cart[data.id]) {
        //prettier-ignore
        return <a onClick={() => {callReducer({ dispatch: "REMOVE_FROM_CART", data });}}>
          <span className="material-icons notranslate">remove_shopping_cart</span> Remove
        </a>
      }

      return (
        //prettier-ignore
        <a onClick={() => {callReducer({ dispatch: "ADD_TO_CART", data });}} className="btn">
          Add To Cart
        </a>
      );
    };
    return (
      <div className="col l3 s12" key={props.id}>
        <div className="card medium animated fadeInUp">
          <div className="card-image">
            <img src={`/uploads/images/${props.image_one}`} />
          </div>
          <div className="card-content">
            <center>
              <Link to={{ pathname: `/shop/products/${props.slug}`, props }}>
                {props.title}
              </Link>
              <br />
              <p>{format("NGN", props.price)}</p> <br /> <br />
            </center>
          </div>
          <div className="card-action">
            <center>
              {renderCartButton(props)}
              {/* <Link to="/shop/cart.html" className="waves-effect">
                <span className="material-icons notranslate">
                  shopping_cart
                </span>{" "}
                Cart
              </Link> */}
            </center>
          </div>
        </div>
      </div>
    );
  };

  const nav = [
    {
      label: "All Products",
    },
  ];

  return (
    <Container className="bg">
      <div className="row">
        <div className="container">
          <Search dispatch="UPDATE_PRODUCTS" endpoint="/api/products/search" />
          <br />

          <CategoryListComponent />
          <ListComponent
            {...{ list, callback, fetching }}
            dispatch="UPDATE_PRODUCTS"
          />

          <br />
          <br />
          <br />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
