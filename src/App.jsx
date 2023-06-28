import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { createBrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import TestAdmin from "./pages/Admin/TestAdmin";

export const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <HomeTemplate path="/home" exact Component={Home} />
                <HomeTemplate path="/contact" exact Component={Contact} />
                <HomeTemplate path="/news" exact Component={News} />
                <HomeTemplate path="/detail/:id" exact Component={Detail} />
                <HomeTemplate path="/profile" exact Component={Profile} />

                <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

                <UserTemplate path="/login" exact Component={Login} />
                <UserTemplate path="/register" exact Component={Register} />

                <AdminTemplate path="/admin" exact Component={Admin} />
                <AdminTemplate path="/admin/123" exact Component={TestAdmin} />

                <HomeTemplate path="/" exact Component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
// import { Suspense, lazy } from "react";

// const CheckoutTemplateLazy = lazy(() =>
//     import("./templates/CheckoutTemplate/CheckoutTemplate")
// );import AdminTemplate from './templates/AdminTemplate/AdminTemplate';

// <Suspense fallback={<div>LOADING...</div>}>
// <CheckoutTemplateLazy
//     path="/checkout/:id"
//     exact
//     Component={Checkout}
// />
// </Suspense>
