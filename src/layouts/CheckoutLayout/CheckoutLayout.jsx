import { Outlet } from "react-router-dom";
import { USER_LOGIN } from "../../Api/BaseApi";
import { history } from "./../../App";
import { useEffect } from "react";

function CheckoutLayout() {
    console.log(localStorage.getItem(USER_LOGIN));
    useEffect(() => {
        if (!localStorage.getItem(USER_LOGIN)) {
            return history.navigate("/login");
        }
    }, []);

    return (
        <>
            <Outlet />
        </>
    );
}
export default CheckoutLayout;
