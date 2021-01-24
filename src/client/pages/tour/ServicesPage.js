import React from "react";
import ContainerComponent from "components/container/TourContainerComponent";

function ServicesPage() {
  const nav = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Services",
    },
  ];

  return (
    <ContainerComponent bread={nav}>
      <div className="bg app-py-3">
        <div className="container">
          <div className="row">
            <div className="col l3 s12">
              <div className="app-flex">
                <div className="app-flex-1 center">
                  <i
                    className="flaticon-analytics btn-color"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
                <div className="app-flex-3">
                  <a className="btn-color app-bold">Data Protection</a>
                  <p>
                    Perfectly elaborated and calculated investment plans for
                    depositPerfectly elaborated and c profit during the entire
                    term of the deposit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col l3 s12">
              <div className="app-flex">
                <div className="app-flex-1">
                  <i
                    className="flaticon-secure-shield btn-color"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
                <div className="app-flex-3">
                  <a className="btn-color app-bold">Security Protected</a>
                  <p>
                    Perfectly elaborated and calculated investment plans for
                    depositPerfectly elaborated and c profit during the entire
                    term of the deposit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col l3 s12">
              <div className="app-flex">
                <div className="app-flex-1">
                  <i
                    className="flaticon-people btn-color"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
                <div className="app-flex-3">
                  <a className="btn-color app-bold">Support 24/7</a>
                  <p>
                    Perfectly elaborated and calculated investment plans for
                    depositPerfectly elaborated and c profit during the entire
                    term of the deposit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col l3 s12">
              <div className="app-flex">
                <div className="app-flex-1">
                  <i
                    className="flaticon-credit-card btn-color"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
                <div className="app-flex-3">
                  <a className="btn-color app-bold">Payment Methods</a>
                  <p>
                    Perfectly elaborated and calculated investment plans for
                    depositPerfectly elaborated and c profit during the entire
                    term of the deposit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col l3 s12">
              <div className="app-flex">
                <div className="app-flex-1">
                  <i
                    className="flaticon-money-2 btn-color"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
                <div className="app-flex-3">
                  <a className="btn-color app-bold">Registered Company</a>
                  <p>
                    Perfectly elaborated and calculated investment plans for
                    depositPerfectly elaborated and c profit during the entire
                    term of the deposit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col l3 s12">
              <div className="app-flex">
                <div className="app-flex-1">
                  <i
                    className="flaticon-money-1 btn-color"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
                <div className="app-flex-3">
                  <a className="btn-color app-bold">Secured Company</a>
                  <p>
                    Perfectly elaborated and calculated investment plans for
                    depositPerfectly elaborated and c profit during the entire
                    term of the deposit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col l3 s12">
              <div className="app-flex">
                <div className="app-flex-1">
                  <i
                    className="flaticon-bitcoin btn-color"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
                <div className="app-flex-3">
                  <a className="btn-color app-bold">Live Exchange Rates</a>
                  <p>
                    Perfectly elaborated and calculated investment plans for
                    depositPerfectly elaborated and c profit during the entire
                    term of the deposit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col l3 s12">
              <div className="app-flex">
                <div className="app-flex-1">
                  <i
                    className="flaticon-bitcoin-1 btn-color"
                    style={{ fontSize: "48px" }}
                  ></i>
                </div>
                <div className="app-flex-3">
                  <a className="btn-color app-bold">
                    Cryptocurrency Investments
                  </a>
                  <p>
                    Perfectly elaborated and calculated investment plans for
                    depositPerfectly elaborated and c profit during the entire
                    term of the deposit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
}

export default ServicesPage;
