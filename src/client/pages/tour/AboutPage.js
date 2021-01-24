import React from "react";
import AboutComponent from "components/tour/TourAboutComponent";
import ContainerComponent from "components/container/TourContainerComponent";
import TourTestimonialsComponent from "components/tour/TourTestimonialsComponent";

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
    <ContainerComponent bread={nav}>
      <AboutComponent />
      <TourTestimonialsComponent />
    </ContainerComponent>
  );
}

export default AboutPage;
