import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "providers/AppProvider";
import ListComponent from "components/ListComponent";
import ContainerComponent from "components/container/TourContainerComponent";

function CategoryListPage() {
  const { state, getRequestThenDispatch } = React.useContext(AppContext);

  getRequestThenDispatch("/api/groups", "UPDATE_GROUPS");

  const list = state.groups;

  const callback = ({ id, name, slug, image }) => {
    return (
      <div key={id} className="col l2 s12">
        <div className="card hoverable">
          <div className="card-image app-px-1 app-py-1">
            <img src={`/uploads/images/${image}`} />
          </div>
          {name}
          <br />
          <br />
        </div>
      </div>
    );
  };

  return (
    <ContainerComponent>
      <div className="container">
        <br />
        <div className="row center">
          <ListComponent {...{ list, callback }} />
        </div>
      </div>
    </ContainerComponent>
  );
}

export default CategoryListPage;
