import React from "react";
import Brand1 from "assets/images/Brand1.png";
import Brand2 from "assets/images/Brand2.png";
import Brand3 from "assets/images/Brand3.png";
import Brand4 from "assets/images/Brand4.png";
import Brand5 from "assets/images/Brand5.png";
import Brand6 from "assets/images/Brand6.png";
import Brand7 from "assets/images/Brand7.png";
import Brand8 from "assets/images/Brand8.png";

function BrandsComponent() {
  return (
    <div className="bg bg-page app-py-3">
      <div className="container">
        <div className="row center">
          <div className="col l3 s12">
            <img src={Brand1} className="responsive-img" />
          </div>
          <div className="col l3 s12">
            <img src={Brand2} className="responsive-img" />
          </div>
          <div className="col l3 s12">
            <img src={Brand3} className="responsive-img" />
          </div>
          <div className="col l3 s12">
            <img src={Brand4} className="responsive-img" />
          </div>
          <div className="col l3 s12">
            <img src={Brand5} className="responsive-img" />
          </div>
          <div className="col l3 s12">
            <img src={Brand6} className="responsive-img" />
          </div>
          <div className="col l3 s12">
            <img src={Brand7} className="responsive-img" />
          </div>
          <div className="col l3 s12">
            <img src={Brand8} className="responsive-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandsComponent;
