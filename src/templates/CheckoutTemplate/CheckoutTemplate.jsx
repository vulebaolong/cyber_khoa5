import { Route, Redirect } from "react-router-dom";
import { USER_LOGIN } from "../../Api/BaseApi";

function CheckoutTemplate(props) {
    const { Component, ...restProps } = props;
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login" />;
    }
    return (
        <Route
            {...restProps}
            render={(propsRoute) => {
                return (
                    <>
                        <Component {...propsRoute} />
                    </>
                );
            }}
        />
    );
}
export default CheckoutTemplate;
