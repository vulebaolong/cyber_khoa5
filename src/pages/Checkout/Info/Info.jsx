import { Button, Tag, Radio, Space, Typography, notification, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import style from "./Info.module.css";
import { useRef } from "react";
import { DatVe } from "../../../class/DatVe";
import {
    datVeAction,
    selectedThanhToan,
    setDatVe,
    showHideModalDatVe,
} from "../../../redux/slices/QuanLyDatVeSlice";
import { useState } from "react";
import momoImg from "../../../assets/thanhtoan/momo.png";
import zalopayImg from "../../../assets/thanhtoan/zaloPay.png";
import atmBlackImg from "../../../assets/thanhtoan/atmBlack.png";
import atmWhiteImg from "../../../assets/thanhtoan/atmWhite.png";
import visaImg from "../../../assets/thanhtoan/visa_mastercard.png";
import { useEffect } from "react";

const { Text } = Typography;

function Info() {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (
        type = "success",
        title = "Tiêu đề",
        mes = "Tin nhắn",
        position = "bottom"
    ) => {
        api[type]({
            message: title,
            description: mes,
            placement: position,
        });
    };

    const dispatch = useDispatch();
    const { danhSachPhongVe, danhSachGheDangChon, thanhToan, isModalOpen } = useSelector(
        (state) => state.QuanLyDatVeSlice
    );
    const { userLogin } = useSelector((state) => state.QuanLyNguoiDungSlice);
    const { thongTinPhim } = danhSachPhongVe;
    const handleOk = () => {
        dispatch(showHideModalDatVe("hide"));
    };
    const handleCancel = () => {
        dispatch(showHideModalDatVe("hide"));
    };

    const renderGia = () => {
        let gia = 0;
        danhSachGheDangChon.forEach((ghe, index) => {
            gia += +ghe.giaVe;
        });

        return new Intl.NumberFormat(navigator.language).format(gia);
    };
    const renderGhe = () => {
        return danhSachGheDangChon.map((ghe, index) => {
            let color = `green`;
            if (ghe.loaiGhe === "Vip") color = `gold`;
            return (
                <Tag
                    color={color}
                    key={index}
                    className="flex h-10 w-10 justify-center items-center m-0"
                >
                    <span>{ghe.tenGhe}</span>
                </Tag>
            );
        });
    };

    const handleDatVe = () => {
        const data = new DatVe();
        if (danhSachGheDangChon.length === 0) {
            openNotification("warning", "Cảnh báo", "Xin vui lòng chọn ghế");
            return;
        }
        if (thanhToan === "0") {
            openNotification(
                "warning",
                "Cảnh báo",
                "Xin vui lòng chọn hình thức thanh toán"
            );
            return;
        }
        data.maLichChieu = danhSachPhongVe.thongTinPhim.maLichChieu;
        data.danhSachVe = danhSachGheDangChon;
        console.log(data);
        // showModal();
        dispatch(datVeAction(data));
    };

    const renderThanhToan = () => {
        if (danhSachGheDangChon.length === 0) {
            return <p className="text-red-500">Vui lòng chọn ghế</p>;
        }
        return (
            <Radio.Group onChange={onChange} value={thanhToan} className="">
                <Space direction="vertical">
                    <Radio value={1}>
                        <div className="flex items-center gap-2 ml-3 text-slate-500 dark:text-slate-400">
                            <img className="w-8 h-8" src={momoImg} alt="momoImg" />
                            <p className="m-0">Thanh toán qua ví MOMO</p>
                        </div>
                    </Radio>
                    <Radio value={2}>
                        <div className="flex items-center gap-2 ml-3 text-slate-500 dark:text-slate-400">
                            <img className="w-8 h-8" src={zalopayImg} alt="zalopayImg" />
                            <p className="m-0">Thanh toán qua ví ZaloPay</p>
                        </div>
                    </Radio>
                    <Radio value={3}>
                        <div className="flex items-center gap-2 ml-3 text-slate-500 dark:text-slate-400">
                            <img
                                className="w-8 h-8"
                                src={atmWhiteImg}
                                alt="atmWhiteImg"
                            />
                            <p className="m-0">Thanh toán qua ví ATM</p>
                        </div>
                    </Radio>
                    <Radio value={4}>
                        <div className="flex items-center gap-2 ml-3 text-slate-500 dark:text-slate-400">
                            <img className="w-8 h-8" src={visaImg} alt="atmWhiteImg" />
                            <p className="m-0">Thanh toán qua MasterCard</p>
                        </div>
                    </Radio>
                </Space>
            </Radio.Group>
        );
    };

    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        dispatch(selectedThanhToan(e.target.value));
    };

    const renderContentModal = () => {
        return <div className="">123</div>;
    };

    useEffect(() => {
        return () => {
            dispatch(setDatVe(false));
        };
    }, []);

    return (
        <>
            {contextHolder}
            <div
                className={`h-screen flex flex-col bg-white dark:bg-slate-900`}
                style={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}
            >
                <div className="p-5 flex flex-col justify-between flex-1">
                    <div className="">
                        <h3 className="text-4xl font-bold text-center text-green-400 m-0">
                            <span>{renderGia()}</span>
                            <span> đ</span>
                        </h3>
                        <hr className="border-gray-700 my-3" />

                        {/* THÔNG TIN PHIM */}
                        <div className="space-y-2">
                            <p className="uppercase m-0">
                                <strong>{thongTinPhim?.tenPhim}</strong>
                            </p>
                            <p className="m-0">{thongTinPhim?.tenCumRap}</p>
                            <p className="m-0">
                                {thongTinPhim?.ngayChieu} - {thongTinPhim?.tenRap}
                            </p>
                        </div>

                        <hr className="border-gray-700 my-3" />

                        {/* THÔNG TIN VÉ CHỌN */}
                        <div className="flex justify-between gap-2">
                            <div className="flex flex-wrap h-20 overflow-auto  gap-2">
                                <span style={{ marginTop: "10px" }} className="h-10 w-10">
                                    Ghế:{" "}
                                </span>
                                {renderGhe()}
                            </div>
                            <span className="flex items-center gap-1 font-bold  text-green-400">
                                <Text
                                    ellipsis={{ tooltip: `${renderGia()}` }}
                                    className="font-bold  text-green-400"
                                >
                                    {renderGia()}
                                </Text>
                                <span> đ</span>
                            </span>
                        </div>

                        <hr className="border-gray-700 my-3" />

                        {/* EMAIL */}
                        <div className="space-y-2">
                            <label className="text-xs">E-mail</label>
                            <p className="m-0">{userLogin.email}</p>
                        </div>

                        <hr className="border-gray-700 my-3" />

                        {/* PHONE */}
                        <div className="space-y-2">
                            <label className="text-xs">Phone</label>
                            <p className="m-0">{userLogin.soDT}</p>
                        </div>

                        <hr className="border-gray-700 my-3" />

                        {/* MÃ GIẢM GIÁ */}
                        <div className="flex justify-between items-center">
                            <div className="space-y-2 ">
                                <label className="text-xs">Mã giảm giá</label>
                                <p className="m-0">Tạm thời không áp dụng</p>
                            </div>
                            <Button type="primary" disabled>
                                Áp dụng
                            </Button>
                        </div>

                        <hr className="border-gray-700 my-3" />

                        {/* HÌNH THỨC THANH TOÁN */}
                        <div className="space-y-2 flex flex-col">
                            <label className="text-xs">Hình thức thanh toán</label>
                            {renderThanhToan()}
                        </div>
                    </div>
                    <div className="text-center text-xs">
                        <i className="fa-solid fa-circle-exclamation text-red-500"></i>
                        <span> Vé đã mua không thể đổi hoặc hoàn tiền</span>
                        <p className="m-0">
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
                        className="bg-blue-400 h-14"
                        onClick={() => {
                            handleDatVe();
                        }}
                    >
                        <strong className="text-lg">Đặt vé</strong>
                    </Button>
                </div>
            </div>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {renderContentModal()}
            </Modal>
        </>
    );
}
export default Info;
