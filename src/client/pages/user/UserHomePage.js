import React from "react";
import UserContainerComponent from "components/container/UserContainerComponent";

function UserHomePage() {
  React.useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  return (
    <UserContainerComponent showFooter={false}>
      <div className="bg app-py-1"></div>
      <div className="container">
        <br />
      </div>
    </UserContainerComponent>
  );
}

export default UserHomePage;
