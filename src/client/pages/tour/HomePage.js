import React from "react";
import DealComponent from "./components/DealComponent";
import BrandsComponent from "./components/BrandsComponent";
import TestimonailsComponent from "./components/TestimonialsComponent";
import CategoryListComponent from "../shop/components/CategoryListComponent";
import ProductsListComponent from "../shop/components/ProductsListComponent";
import ContainerComponent from "components/container/TourContainerComponent";
import RecentProductsComponent from "../shop/components/RecentProductsComponent";

function HomePage() {
  return (
    <ContainerComponent className="bg">
      <div className="container">
        <div className="row">
          <CategoryListComponent />
          <ProductsListComponent />
        </div>
      </div>
      <DealComponent />
      <RecentProductsComponent />
      <TestimonailsComponent />
      <BrandsComponent />
    </ContainerComponent>
  );
}

export default HomePage;
