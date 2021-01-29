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
          <div style={{ marginBottom: "5px" }}>
            <img src={`/uploads/images/${image}`} width="130" height="113" />
          </div>
          <a>{name}</a>
          <br />
          <br />
        </div>
      </div>
    );
  };

  return <ListComponent {...{ list, callback }} />;
}

export default CategoryListPage;
