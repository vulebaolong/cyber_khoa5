import { Route } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import { useEffect } from "react";

function HomeTemplate(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const { Component, ...restProps } = props;
    return (
        <Route
            {...restProps}
            render={(propsRoute) => {
                return (
                    <>
                        <Header {...propsRoute} />
                        <Component {...propsRoute} />
                        <Footer />
                    </>
                );
            }}
        />
    );
}
export default HomeTemplate;
