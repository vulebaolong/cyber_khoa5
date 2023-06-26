import { Button, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import style from "./Info.module.css";
import { useRef } from "react";
import { DatVe } from "../../../class/DatVe";
import { datVeAction } from "../../../redux/slices/QuanLyDatVeSlice";

function Info() {
    const dispatch = useDispatch();
    const { danhSachPhongVe, danhSachGheDangChon } = useSelector(
        (state) => state.QuanLyDatVeSlice
    );
    const { userLogin } = useSelector((state) => state.QuanLyNguoiDungSlice);
    const { thongTinPhim } = danhSachPhongVe;
    const renderGia = () => {
        let gia = 0;
        danhSachGheDangChon.forEach((ghe, index) => {
            gia += +ghe.giaVe;
        });
        return gia;
    };
    const renderGhe = () => {
        return danhSachGheDangChon.map((ghe, index) => {
            let color = `green`;
            if (ghe.loaiGhe === "Vip") color = `gold`;
            return (
                <Tag
                    color={color}
                    key={index}
                    className="flex h-9 justify-center items-center m-0"
                >
                    <span>{ghe.tenGhe}</span>
                </Tag>
            );
        });
    };

    const handleDatVe = () => {
        const data = new DatVe();
        // const data = {
        //     maLichChieu: danhSachPhongVe.thongTinPhim.maLichChieu,
        //     danhSachVe: danhSachGheDangChon,
        // };
        data.maLichChieu = danhSachPhongVe.thongTinPhim.maLichChieu;
        data.danhSachVe = danhSachGheDangChon;
        console.log(data);
        dispatch(datVeAction(data));
    };
    return (
        <div
            className={`h-screen flex flex-col bg-white dark:bg-slate-900`}
            style={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}
        >
            <div className="p-5 flex flex-col justify-between flex-1">
                <div className="">
                    <h3 className="text-4xl font-bold text-center text-green-400 m-0">
                        <span>
                            {new Intl.NumberFormat(navigator.language).format(
                                renderGia()
                            )}
                        </span>
                        <span> đ</span>
                    </h3>
                    <hr className="border-gray-500 my-5" />
                    <p className="uppercase">{thongTinPhim?.tenPhim}</p>
                    <p>{thongTinPhim?.tenCumRap}</p>
                    <p>
                        {thongTinPhim?.ngayChieu} - {thongTinPhim?.tenRap}
                    </p>
                    <hr className="border-gray-500 my-5" />

                    <div className="flex justify-between">
                        <div className="h-24 overflow-auto grid grid-cols-5 gap-2">
                            <span style={{ marginTop: "10px" }}>Ghế: </span>
                            {renderGhe()}
                        </div>
                        <span className="flex items-center gap-1 font-bold  text-green-400">
                            <span>
                                {new Intl.NumberFormat(navigator.language).format(
                                    renderGia()
                                )}
                            </span>
                            <span> đ</span>
                        </span>
                    </div>
                    <hr className="border-gray-500 my-5" />
                    <div className="space-y-2">
                        <label className="text-sm">E-mail</label>
                        <p className="">{userLogin.email}</p>
                    </div>
                    <hr className="border-gray-500 my-5" />
                    <div className="space-y-2">
                        <label className="text-sm">Phone</label>
                        <p className="">{userLogin.soDT}</p>
                    </div>
                    <hr className="border-gray-500 my-5" />
                    <div className="flex justify-between items-center">
                        <div className="space-y-2 ">
                            <label className="text-sm">Mã giảm giá</label>
                            <p className="">Tạm thời không áp dụng</p>
                        </div>
                        <Button type="primary" disabled>
                            Áp dụng
                        </Button>
                    </div>
                    <hr className="border-gray-500 my-5" />
                    <div className="space-y-2">
                        <label className="text-sm">Hình thức thanh toán</label>
                        <p className="text-red-500">Vui lòng chọn ghế</p>
                    </div>
                </div>
                <div className="text-center">
                    <i className="fa-solid fa-circle-exclamation text-red-500"></i>
                    <span> Vé đã mua không thể đổi hoặc hoàn tiền</span>
                    <p>
                        Mã vé sẽ được gửi qua tin nhắn{" "}
                        <span className="text-red-500">ZMS</span> (tin nhắn Zalo) và{" "}
                        <span className="text-red-500">Email</span> đã nhập.
                    </p>
                </div>
            </div>
            <div className="p-2">
                <Button
                    type="primary"
                    block
                    className="bg-blue-400 h-16"
                    onClick={() => {
                        handleDatVe();
                    }}
                >
                    <strong className="text-lg">Đặt vé</strong>
                </Button>
            </div>
        </div>
    );
}
export default Info;
