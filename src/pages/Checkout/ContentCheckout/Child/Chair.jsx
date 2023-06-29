import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import Ghe from "../ItemChair.jsx/Ghe";
import { gheDangChonREDU } from "../../../../redux/slices/QuanLyDatVeSlice";
import { Avatar } from "antd";

function Chair() {
    const dispatch = useDispatch();
    const { danhSachPhongVe, danhSachGheDangChon, danhSachGheNguoiKhacChon } =
        useSelector((state) => state.QuanLyDatVeSlice);
    const { userLogin } = useSelector((state) => state.QuanLyNguoiDungSlice);
    const { danhSachGhe } = danhSachPhongVe;

    const renderGhe = (hang, letter) => {
        return hang.map((ghe, index) => {
            const { daDat, loaiGhe } = ghe;
            const data = { ...ghe, tenGhe: `${letter}${ghe.tenGhe}` };
            const handleOnclick = () => {
                console.log(data);
                dispatch(gheDangChonREDU(data));
            };

            // GHẾ BẠN MUA
            if (ghe.taiKhoanNguoiDat === userLogin.taiKhoan) {
                const element = <Avatar src={`https://picsum.photos/200`} size={20} />;
                return <Ghe type={"gheDaMua"} key={index} element={element} />;
            }

            // GHẾ NGƯỜI KHÁC MUA
            if (daDat) {
                const element = (
                    <strong>
                        <i className="fa-solid fa-x text-slate-200"></i>
                    </strong>
                );
                return <Ghe type={"gheDuocMua"} key={index} element={element} />;
            }

            // GHẾ NGƯỜI KHÁC ĐANG CHỌN
            const indexGheNguoiChon = danhSachGheNguoiKhacChon.findIndex((item) => {
                return item.maGhe === ghe.maGhe;
            });
            if (indexGheNguoiChon !== -1) {
                const element = <i className="fa-solid fa-user text-slate-200"></i>;
                return <Ghe type={"gheDangChon"} key={index} element={element} />;
            }

            // GHẾ ĐANG CHỌN
            const indexGheBanChon = danhSachGheDangChon.findIndex((item) => {
                return item.maGhe === ghe.maGhe;
            });
            if (indexGheBanChon !== -1) {
                const element = (
                    <span className="text-slate-200 text-xs">
                        <strong>{data.tenGhe}</strong>
                    </span>
                );
                return (
                    <Ghe
                        type={"gheDangChon"}
                        key={index}
                        element={element}
                        onClick={handleOnclick}
                    />
                );
            }

            // GHẾ VIP
            if (loaiGhe === "Vip") {
                return <Ghe type={"gheVip"} key={index} onClick={handleOnclick} />;
            }

            // GHẾ THƯỜNG
            if (loaiGhe === "Thuong") {
                return <Ghe type={"gheThuong"} key={index} onClick={handleOnclick} />;
            }
        });
    };

    const list = _.chunk(danhSachGhe, 16).slice(0, 10); // Chia mảng gốc thành các mảng con có 16 phần tử và chỉ lấy 10 phần tử đầu tiên
    const renderHang = () => {
        return list.map((hang, index) => {
            const letter = String.fromCharCode("A".charCodeAt(0) + index);
            return (
                <div className="flex gap-3" key={index}>
                    <div className="w-9 h-9 flex items-center justify-center">
                        <strong>{letter}</strong>
                    </div>
                    <div className="flex gap-2">{renderGhe(hang, letter)}</div>
                </div>
            );
        });
    };
    return (
        <div className="flex justify-center my-7">
            <div className="space-y-3">{renderHang()}</div>
        </div>
    );
}
export default Chair;
