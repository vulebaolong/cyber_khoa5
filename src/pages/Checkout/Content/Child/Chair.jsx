import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import Ghe from "../ItemChair.jsx/Ghe";
import { gheDangChon } from "../../../../redux/slices/QuanLyDatVeSlice";

function Chair() {
    const dispatch = useDispatch();
    const { danhSachPhongVe, danhSachGheDangChon } = useSelector(
        (state) => state.QuanLyDatVeSlice
    );
    const { danhSachGhe } = danhSachPhongVe;

    const renderGhe = (hang) => {
        return hang.map((ghe, index) => {
            let type = "gheThuong";
            const { daDat, loaiGhe } = ghe;

            if (loaiGhe === "Vip") type = "gheVip";
            const indexGheChon = danhSachGheDangChon.findIndex((item) => {
                return item.maGhe === ghe.maGhe;
            });
            if (indexGheChon !== -1) {
                type = "gheDangChon";
            }
            if (daDat) type = "gheDuocMua";
            const handleOnclick = () => {
                dispatch(gheDangChon(ghe));
            };
            return <Ghe type={type} key={index} onClick={handleOnclick} />;
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
                    <div className="flex gap-2">{renderGhe(hang)}</div>
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
