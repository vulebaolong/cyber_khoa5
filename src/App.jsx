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
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import TestAdmin from "./pages/Admin/TestAdmin";
import AddFilm from "./pages/Admin/Films/AddFilm";
import AdminHome from "./pages/Admin/AdminHome";
import ListFilm from "./pages/Admin/ListFilm/ListFilm";
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

                <AdminTemplate path="/admin" exact Component={AdminHome} />
                <AdminTemplate path="/admin/film/listfilm" exact Component={ListFilm} />
                <AdminTemplate path="/admin/film/addfilm" exact Component={AddFilm} />

                <HomeTemplate path="/" exact Component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
