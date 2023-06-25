import Header from "./Header/Header";
import Content from "./Content/Content";
import Info from "./Info/Info";

function Checkout() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-start-1 col-span-8 outline outline-1 outline-red-500">
                <Header />
                <Content />
            </div>
            <div className="col-start-9 col-span-4 outline outline-1 outline-red-500">
                <Info />
            </div>
        </div>
    );
}
export default Checkout;
