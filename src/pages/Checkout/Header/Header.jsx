import { Avatar, Steps } from "antd";
import { useSelector } from "react-redux";
import ControlUser from "./../../../components/ControlUser/ControlUser";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
function Header() {
    const { userLogin } = useSelector((state) => state.QuanLyNguoiDungSlice);
    const { danhSachGheDangChon, thanhToan, isDatVe } = useSelector(
        (state) => state.QuanLyDatVeSlice
    );

    const createCurrentStep = () => {
        if (isDatVe) return 3;
        if (+thanhToan > 0) return 2;
        if (danhSachGheDangChon.length !== 0) return 1;
        return 0;
    };
    return (
        <div
            style={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}
            className=" p-4 flex justify-between items-center gap-52"
        >
            <div className="flex-1">
                <Steps
                    current={createCurrentStep()}
                    items={[
                        {
                            title: <strong>CHỌN GHẾ</strong>,
                        },
                        {
                            title: <strong>THANH TOÁN</strong>,
                            description: "Chọn thanh toán",
                        },
                        {
                            title: <strong>KẾT QUẢ ĐẶT VÉ</strong>,
                        },
                    ]}
                />
            </div>
            <div className="flex items-center gap-2">
                <ControlUser />

                <NavLink
                    activeClassName="dark:text-violet-400 dark:border-violet-400"
                    to="/home"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent "
                >
                    Home
                </NavLink>
            </div>
        </div>
    );
}
export default Header;
