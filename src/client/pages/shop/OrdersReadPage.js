import React from "react";
import { Helmet } from "react-helmet";
import { formatOrder } from "functions/data";
import { getRequestThenDispatch } from "hooks";
import TableComponent from "components/TableComponent";
import SpinnerComponent from "components/SpinnerComponent";
import OrderPayComponent from "./components/OrderPayComponent";
import OrderProductsComponent from "./components/OrderProductsComponent";
import TourContainerComponent from "components/container/TourContainerComponent";

import FormComponent from "components/FormComponent";
import BreadComponent from "components/container/BreadComponent";
import TourNavComponent from "components/container/TourNavComponent";

function OrderReadPage({ match }) {
  const { reference } = match.params;
  const url = `/api/orders/${reference}`;
  const { state, request } = getRequestThenDispatch(url, "UPDATE_ORDER");

  if (request.fetching) {
    return (
      <TourContainerComponent>
        <center>
          <SpinnerComponent />
        </center>
      </TourContainerComponent>
    );
  }

  const rawData = state.orders.object[reference];

  if (!rawData) {
    return (
      <TourContainerComponent>
        <div className="container center app-py-3">
          <div className="card-panel app-py-3">ORDER NOT FOUND</div>
        </div>
      </TourContainerComponent>
    );
  }

  const data = formatOrder(rawData);

  return (
    <TourContainerComponent bread={[{ label: `Order ${rawData.reference}` }]}>
      <div className="container app-py-3">
        <Helmet>
          <script src="https://checkout.flutterwave.com/v3.js"></script>
        </Helmet>
        <div className="card-panel center">
          <h1>{data.total_in_ngn}</h1>
          <br />
          <br />
          <OrderPayComponent rawData={rawData} />
          <OrderProductsComponent products={rawData.products} />
          <TableComponent data={data} />
        </div>
      </div>
    </TourContainerComponent>
  );

  // const { request, callBack } = sendRequestThenDispatch();
  // const { fetching } = request;
  // if (!rawData) {
  //   return (
  //     <TourContainerComponent
  //       bread={[
  //         { label: "Shop", link: "/shop/products.html" },
  //         { label: "Order Not Found" },
  //       ]}
  //     >
  //       <div className="container">
  //         <br />
  //         <div className="card-panel">
  //           <p>Order Not Found</p>
  //         </div>
  //       </div>
  //     </TourContainerComponent>
  //   );
  // }
  // const confirmPayment = async () => {
  //   let url = "/api/orders/confirm/coin";
  //   if (rawData.cp_url.length) {
  //     callBack(url, "UPDATE_ORDER", { id: rawData.id }, () => {}, "PATCH");
  //   } else {
  //     url = "/api/orders/confirm/flutter";
  //     callBack(
  //       url,
  //       "UPDATE_ORDER",
  //       { tx_ref: rawData.reference },
  //       () => {},
  //       "PATCH"
  //     );
  //   }
  // };
  // const data = formatOrder(rawData);
  // let nav;
  // if (state.user) {
  //   nav = [
  //     {
  //       label: "Orders",
  //       link: "/shop/orders.html",
  //     },
  //     {
  //       label: `${reference} ${data.total_in_ngn}`,
  //     },
  //   ];
  // } else {
  //   nav = [
  //     {
  //       label: `${reference} ${data.total_in_ngn}`,
  //     },
  //   ];
  // }
  // const pay = () => {
  // FlutterwaveCheckout({
  //   public_key: PUBLIC_KEY,
  //   tx_ref: rawData.reference,
  //   amount: rawData.total_in_ngn,
  //   currency: "NGN",
  //   payment_options: "card,mobilemoney,ussd",
  //   // specified redirect URL
  //   // redirect_url:
  //   //   "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
  //   // meta: {
  //   //   consumer_id: 23,
  //   //   consumer_mac: "92a3-912ba-1192a",
  //   // },
  //   customer: {
  //     email: rawData.email,
  //     phone_number: rawData.phone_number,
  //   },
  //   callback: function (body) {
  //     console.log(body);
  //     callBack(
  //       "/api/orders/confirm/flutter",
  //       "UPDATE_ORDER",
  //       body,
  //       () => {},
  //       "PATCH"
  //     );
  //   },
  //   customizations: {
  //     title: "TraderFX Martketplace",
  //     description: "Payment for Crypto",
  //     logo: "https://www.traderfxm.com/assets/images/logo.png",
  //   },
  // });
  // };
  // const renderPaystack = () => {
  //   if (fetching) {
  //     return <SpinnerComponent />;
  //   }
  //   return (
  //     <button className="btn" onClick={pay}>
  //       Proceed
  //     </button>
  //   );
  // };
  // const renderProducts = () => {
  // return rawData?.products?.map((product) => {
  //   return (
  //     <tr key={product.id}>
  //       <td>
  //         {product.title} X {product.order_product.quantity}
  //       </td>
  //       <td>{format("NGN", product.price)}</td>
  //     </tr>
  //   );
  // });
  // };
  // const formArray = [
  //   {
  //     id: "currency",
  //     type: "select",
  //     className: "  ",
  //     options: [
  //       {
  //         value: "BTC",
  //         label: "Bitcoin",
  //       },
  //       {
  //         value: "ETH",
  //         label: "Ethereum",
  //       },
  //       {
  //         value: "USDT",
  //         label: "Tether",
  //       },
  //     ],
  //   },
  // ];
  // const text = "Proceed";
  // const renderPayment = () => {
  // if (rawData.status == 3) {
  //   return (
  //     <div className="center">
  //       <p>This order has been completed and delivered</p>
  //       <br />
  //     </div>
  //   );
  // }
  // if (rawData.status == 2) {
  //   return (
  //     <div className="center">
  //       <p>
  //         Your payment has been recieved, your order will be delivered as soon
  //         as possible
  //       </p>
  //       <p>
  //         Please copy this url or the reference code to monitor your order.
  //       </p>
  //       <br />
  //     </div>
  //   );
  // }
  // if (rawData.cp_url) {
  //   return (
  //     <div className="center">
  //       <p>PLEASE CLICK THE LINK BELOW TO MAKE PAYMENT</p>
  //       <a href={rawData.cp_url} target="_blank">
  //         {rawData.cp_url}
  //       </a>
  //       <p></p>
  //       <br />
  //     </div>
  //   );
  // }
  //   return (
  // <div className="row">
  //   <br />
  //   <div className="col l6 s12">
  //     <p>PAY WITH CARD, BANK OR USSD</p>
  //     {renderPaystack()}
  //     <br />
  //     <br />
  //   </div>
  //   <div className="col l6 s12">
  //     <p>PAY WITH CRYPTO CURRENCY</p>
  //     <FormComponent {...{ formArray, text }} />
  //   </div>
  //     </div>
  //   );
  // };
  // return (
  //   <TourContainerComponent renderHeader={false}>
  // <Helmet>
  //   <script src="https://checkout.flutterwave.com/v3.js"></script>
  // </Helmet>
  //     <div className="bg">
  //       <TourNavComponent />
  //     </div>
  //     <BreadComponent data={nav} className="container" />
  //     <div className="container">
  //       <div className="card-panel app-mt-1">
  //         <div className="row">
  //           <center>
  // <h1>{data.total_in_ngn}</h1>
  //           </center>
  //           <br />
  //           {renderPayment()}
  // <table className="striped">
  //   <tbody>
  //     <tr>
  //       <th>Product</th>
  //       <th>Price</th>
  //     </tr>
  //     {renderProducts()}
  //   </tbody>
  // </table>
  //           <br />
  //           <br />
  // <TableComponent data={data} />
  //         </div>
  //       </div>
  //     </div>
  //     <br />
  //   </TourContainerComponent>
  // );
}

export default OrderReadPage;
