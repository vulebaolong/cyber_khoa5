import { Avatar, Steps } from "antd";
import { useSelector } from "react-redux";
const description = "This is a description.";
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
            <div className="flex flex-col gap-2 items-center">
                <Avatar src={`https://picsum.photos/200`} size={40} />
                <p>{userLogin.hoTen}</p>
            </div>
        </div>
    );
}
export default Header;
