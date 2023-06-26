import Header from "./Header/Header";
import Content from "./Content/Content";
import Info from "./Info/Info";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { layDanhSachPhongVeAction } from "../../redux/slices/QuanLyDatVeSlice";
import { useEffect } from "react";

function Checkout() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(layDanhSachPhongVeAction(id));
    }, []);
    return (
        <div className="grid grid-cols-12">
            <div className="col-start-1 col-span-9 space-y-10">
                <Header />
                <Content />
            </div>
            <div className="col-start-10 col-span-3 ">
                <Info />
            </div>
        </div>
    );
}
export default Checkout;
