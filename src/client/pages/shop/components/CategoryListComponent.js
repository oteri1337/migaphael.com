import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "providers/AppProvider";
import ListComponent from "components/ListComponent";

function CategoryListPage() {
  const { state, getRequestThenDispatch } = React.useContext(AppContext);

  getRequestThenDispatch("/api/groups", "UPDATE_GROUPS");

  const list = state.groups;

  const callback = ({ id, name, slug, image }) => {
    return (
      <div key={id} className="col l2 s12 center">
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

  return <ListComponent {...{ list, callback }} />;
}

export default CategoryListPage;
