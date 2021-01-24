import React from "react";
import ContactComponent from "components/tour/TourContactComponent";
import ContainerComponent from "components/container/TourContainerComponent";

function ContactPage() {
  const nav = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Contact Us",
    },
  ];

  return (
    <ContainerComponent bread={nav}>
      <ContactComponent />
    </ContainerComponent>
  );
}

export default ContactPage;
