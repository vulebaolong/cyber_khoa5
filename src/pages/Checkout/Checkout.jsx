import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { layDanhSachPhongVeMID } from "../../redux/slices/QuanLyDatVeSlice";
import { useEffect } from "react";
import HeaderCheckout from "./HeaderCheckout/HeaderCheckout";
import ContentCheckout from "./ContentCheckout/ContentCheckout";
import InfoCheckout from "./InfoCheckout/InfoCheckout";

function Checkout() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(layDanhSachPhongVeMID(id));
    }, []);
    return (
        <div className="grid grid-cols-12">
            <div className="col-start-1 col-span-9 space-y-10">
                <HeaderCheckout />
                <ContentCheckout />
            </div>
            <div className="col-start-10 col-span-3 ">
                <InfoCheckout />
            </div>
        </div>
    );
}
export default Checkout;
