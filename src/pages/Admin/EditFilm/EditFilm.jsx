import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setKeyREDU } from "../../../redux/slices/MenuAdminSlice";

function EditFilm() {
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        const item = location.pathname.split("/");
        const result = {
            selectedKeys: `/${item[1]}/${item[2]}/${item[3]}`,
            openKeys: `/${item[1]}/${item[2]}`,
        };
        console.log(result);
        dispatch(setKeyREDU(result));
    }, []);

    const { id } = useParams();

    const contentEditFilm = () => {
        if (id === undefined) {
            return (
                <div className="w-full h-full flex items-center justify-center">
                    <h2 className="text-3xl	font-bold	">
                        Vui Lòng Chọn Phim Muốn Chỉnh Sửa
                    </h2>
                </div>
            );
        }
        if (id) {
            return <div>EditFilm</div>;
        }
    };
    return <>{contentEditFilm()}</>;
}
export default EditFilm;
