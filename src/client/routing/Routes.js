import React from "react";
import { Switch, Route } from "react-router-dom";

import UserRoute from "./UserRoute";
import GuestRoute from "./GuestRoute";
import AdminRoute from "./AdminRoute";
import GuestAdminRoute from "./GuestAdminRoute";

import TermsPage from "../pages/tour/TermsPage";
import ErrorPage from "../pages/tour/ErrorPage";

import CartPage from "../pages/shop/CartPage";
import ProductsListPage from "../pages/shop/ProductsListPage";
import ProductsReadPage from "../pages/shop/ProductsReadPage";
import OrdersListPage from "../pages/shop/OrdersListPage";
import OrdersReadPage from "../pages/shop/OrdersReadPage";
import CategoryListPage from "../pages/shop/CategoryListPage";
import CategoryReadPage from "../pages/shop/CategoryReadPage";
import SubCategoryPage from "../pages/shop/SubCategoryPage";

import SignInPage from "../pages/tour/auth/SignInPage";
import SignUpPage from "../pages/tour/auth/SignUpPage";
import PasswordPage from "../pages/tour/auth/PasswordPage";

import UserHomePage from "../pages/user/UserHomePage";
import AuthCodePage from "../pages/user/auth/CodePage";
import AccountPage from "../pages/user/auth/AccountPage";
import ProfilePage from "../pages/user/auth/ProfilePage";
import VerifyBvnPage from "../pages/user/auth/VerifyBvnPage";
import VerifyEmailPage from "../pages/user/auth/VerifyEmailPage";
import VerifyPhonePage from "../pages/user/auth/VerifyPhonePage";
import UpdatePasswordPage from "../pages/user/auth/PasswordPage";
import UpdateProfilePage from "../pages/user/auth/UpdateProfilePage";

import AdminOrdersListPage from "../pages/admin/orders/OrdersListPage";
import AdminOrdersReadPage from "../pages/admin/orders/OrdersReadPage";

import UsersListPage from "../pages/admin/users/UsersListPage";
import UsersReadPage from "../pages/admin/users/UsersReadPage";

import ProductsHomePage from "../pages/admin/products/ProductsHomePage";
import AdminProductsListPage from "../pages/admin/products/ProductsListPage";
import AdminProductsReadPage from "../pages/admin/products/ProductsReadPage";
import ProductsCreatePage from "../pages/admin/products/ProductsCreatePage";
import ProductsUpdatePage from "../pages/admin/products/ProductsUpdatePage";
import ProductsUpdateImagePage from "../pages/admin/products/ProductsUpdateImagePage";
import ProductsUpdateGroupsPage from "../pages/admin/products/ProductsUpdateGroupsPage";

import ProductGroupsListPage from "../pages/admin/products/groups/ProductGroupsListPage";
import ProductGroupsCreatePage from "../pages/admin/products/groups/ProductGroupsCreatePage";
import ProductGroupsUpdatePage from "../pages/admin/products/groups/ProductGroupsUpdatePage";

import ParentGroupsListPage from "../pages/admin/products/parentgroups/ParentGroupsListPage";
import ParentGroupsCreatePage from "../pages/admin/products/parentgroups/ParentGroupsCreatePage";
import ParentGroupsUpdatePage from "../pages/admin/products/parentgroups/ParentGroupsUpdatePage";

import ReferralsListPage from "../pages/user/referrals/ReferralsListPage";

import BanksListPage from "../pages/user/banks/BanksListPage";
import BanksCreatePage from "../pages/user/banks/BanksCreatePage";

import AdminHomePage from "../pages/admin/AdminHomePage";
import AdminSigninPage from "../pages/admin/AdminSignInPage";
import AdminPasswordPage from "../pages/admin/AdminPasswordPage";
import AdminAccountPage from "../pages/admin/auth/AccountPage";
import AdminProfilePage from "../pages/admin/auth/ProfilePage";
import AdminUpdatePasswordPage from "../pages/admin/auth/PasswordPage";

function Routes() {
  // prettier-ignore
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={ProductsListPage} />
        <Route exact path="/index.html" component={ProductsListPage} />
        <Route exact path="/terms.html" component={TermsPage} />

        <Route exact path="/shop/cart.html" component={CartPage}/>
        <Route exact path="/shop/products.html" component={ProductsListPage}/>
        <UserRoute exact path="/shop/orders.html" component={OrdersListPage} />
        <Route exact path="/shop/orders/:reference" component={OrdersReadPage} />
        <Route exact path="/shop/products/:slug" component={ProductsReadPage}/>

        <Route exact path="/shop/categories/list.html" component={CategoryListPage} />
        <Route exact path="/shop/categories/:slug" component={CategoryReadPage} />
        <Route exact path="/shop/categories/:slug/:sub" component={SubCategoryPage} />


        <GuestRoute exact path="/signin.html" component={SignInPage} />
        <GuestRoute exact path="/signup.html" component={SignUpPage} />
        <GuestRoute exact path="/password.html" component={PasswordPage} />


        <UserRoute exact path="/user/index.html" component={UserHomePage} />
        <UserRoute exact path="/user/auth/account.html" component={AccountPage} />
        <UserRoute exact path="/user/auth/code.html" component={AuthCodePage} />
        <UserRoute exact path="/user/auth/profile.html" component={ProfilePage} />

        <UserRoute exact path="/user/auth/verifybvn.html" component={VerifyBvnPage} />
        <UserRoute exact path="/user/auth/verifyphone.html" component={VerifyPhonePage} />
        <UserRoute exact path="/user/auth/verifyemail.html" component={VerifyEmailPage} />
        
        <UserRoute exact path="/user/auth/password.html" component={UpdatePasswordPage} />
        <UserRoute exact path="/user/auth/update-profile.html" component={UpdateProfilePage} />

        <UserRoute exact path="/user/referrals/list.html" component={ReferralsListPage}/>

        <UserRoute exact path="/user/banks/list.html" component={BanksListPage} />
        <UserRoute exact path="/user/banks/create.html" component={BanksCreatePage} />

        <GuestAdminRoute exact path="/control/signin.html" component={AdminSigninPage} />
        <GuestAdminRoute exact path="/control/password.html" component={AdminPasswordPage} />

        <AdminRoute exact path="/control/index.html" component={AdminHomePage} />
        <AdminRoute exact path="/control/auth/account.html" component={AdminAccountPage} />
        <AdminRoute exact path="/control/auth/profile.html" component={AdminProfilePage} />
        <AdminRoute exact path="/control/auth/password.html" component={AdminUpdatePasswordPage} />

        <AdminRoute exact path="/control/orders/list.html" component={AdminOrdersListPage} />
        <AdminRoute exact path="/control/orders/:reference" component={AdminOrdersReadPage} />

        <AdminRoute exact path="/control/users/list.html" component={UsersListPage} />
        <AdminRoute exact path="/control/users/:id" component={UsersReadPage} />

        <AdminRoute exact path="/control/products/index.html" component={ProductsHomePage} />  
        <AdminRoute exact path="/control/products/list.html" component={AdminProductsListPage} />  
        <AdminRoute exact path="/control/products/create.html" component={ProductsCreatePage} /> 
        <AdminRoute exact path="/control/products/:slug/updateimage" component={ProductsUpdateImagePage} />             
        <AdminRoute exact path="/control/products/:slug/updategroups" component={ProductsUpdateGroupsPage} />             
        <AdminRoute exact path="/control/products/:slug/update" component={ProductsUpdatePage} />    
        <AdminRoute exact path="/control/products/:slug" component={AdminProductsReadPage} />              
          
        <AdminRoute exact path="/control/productgroups/list.html" component={ProductGroupsListPage} />              
        <AdminRoute exact path="/control/productgroups/create.html" component={ProductGroupsCreatePage} />             
        <AdminRoute exact path="/control/productgroups/:slug" component={ProductGroupsUpdatePage} />  

        <AdminRoute exact path="/control/parentgroups/list.html" component={ParentGroupsListPage} />              
        <AdminRoute exact path="/control/parentgroups/create.html" component={ParentGroupsCreatePage} />             
        <AdminRoute exact path="/control/parentgroups/:slug" component={ParentGroupsUpdatePage} />  

        <Route component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;
