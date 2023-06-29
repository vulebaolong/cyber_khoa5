import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import UserLayout from "./layouts/UserLayout/UserLayout";
import SignIn from "./pages/SignIn/SignIn";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import CheckoutLayout from "./layouts/CheckoutLayout/CheckoutLayout";
import Checkout from "./pages/Checkout/Checkout";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import AdminHome from "./pages/Admin/AdminHome";
import ListFilm from "./pages/Admin/ListFilm/ListFilm";
import AddFilm from "./pages/Admin/Films/AddFilm";
import EditFilm from "./pages/Admin/EditFilm/EditFilm";

export const history = {
    navigate: null,
};

function App() {
    history.navigate = useNavigate();
    return (
        <>
            <Routes>
                {/* HOME LAYOUT */}
                <Route element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="news" element={<News />} />
                    <Route path="detail/:id" element={<Detail />} />
                    <Route path="profile" element={<Profile />} />
                </Route>

                {/* USER LAYOUT */}
                <Route element={<UserLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signin" element={<SignIn />} />
                </Route>

                {/* CHECKOUT LAYOUT */}
                <Route element={<CheckoutLayout />}>
                    <Route path="checkout/:id" element={<Checkout />} />
                </Route>

                {/* ADMIN LAYOUT */}
                <Route path="admin" element={<AdminLayout />}>
                    <Route index element={<AdminHome />} />
                    <Route path="film/listfilm" element={<ListFilm />} />
                    <Route path="film/addfilm" element={<AddFilm />} />
                    <Route path="film/editfilm" element={<EditFilm />} />
                    <Route path="film/editfilm/:id" element={<EditFilm />} />
                </Route>

                {/* OTHER */}
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </>
    );
}

export default App;
