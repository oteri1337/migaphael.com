import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import usersReducer from "./usersReducer";
import themeReducer from "./themeReducer";
import ordersReducer from "./ordersReducer";
import groupsReducer from "./groupsReducer";
import productsReducer from "./productsReducer";
import parentgroupsReducer from "./parentgroupsReducer";

function rootReducer(state = {}, action) {
  if (action.dispatch == "UPDATE_STATE") {
    if (action.data) {
      return action.data;
    }
  }

  return {
    cart: cartReducer(state?.cart, action),
    user: userReducer(state?.user, action),
    theme: themeReducer(state?.theme, action),
    admin: adminReducer(state?.admin, action),
    users: usersReducer(state?.users, action),
    orders: ordersReducer(state?.orders, action),
    groups: groupsReducer(state?.groups, action),
    products: productsReducer(state?.products, action),
    parentgroups: parentgroupsReducer(state?.parentgroups, action),
  };
}

export default rootReducer;
