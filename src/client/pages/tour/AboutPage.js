import React from "react";
import ContainerComponent from "components/container/TourContainerComponent";

function AboutPage() {
  const nav = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About Us",
    },
  ];

  return (
    <ContainerComponent bread={nav} className="bg">
      <div className="container">
        <br />
        <h1 className="center">About Us</h1>
        <br />
        <p className="container" style={{ textAlign: "justify" }}>
          {PWA_NAME} is a one-stop online grocery store that stock both
          continental and ALL Nigeria local groceries. We seek to ease the
          stress of family life and corporate responsibilities by making kitchen
          affairs very convenient for Nigerians. We sell all kinds of groceries
          We sell food stuff in bulk We prepare moimoi for parties and family
          consumption. (Orders only) We sell all kinds of Nigeria soups We
          prepare meals for family when they purchase groceries from us @ a low
          fee. We undertake group sharing of meat, fish, chicken etc.
        </p>
      </div>
    </ContainerComponent>
  );
}

export default AboutPage;
