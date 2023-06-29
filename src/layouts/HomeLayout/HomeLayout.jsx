import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import HeaderHome from "../../pages/Home/HeaderHome/HeaderHome";
import FooterHome from "../../pages/Home/FooterHome/FooterHome";

function HomeLayout() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <HeaderHome />
            <Outlet />
            <FooterHome />
        </>
    );
}
export default HomeLayout;
