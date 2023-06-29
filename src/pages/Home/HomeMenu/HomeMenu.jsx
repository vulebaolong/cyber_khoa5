import moment from "moment";
import { Radio, Space, Tabs, Tag } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTheaterSystemMID } from "../../../redux/slices/QuanLyRapSlice";

function HomeMenu() {
    const dispatch = useDispatch();
    const { theaterSystem } = useSelector((state) => state.QuanLyRapSlice);

    useEffect(() => {
        dispatch(getTheaterSystemMID());
    }, []);

    const createText = (text, length) => {
        return text.length > length ? text.slice(0, length) + "..." : text;
    };

    const renderDanhSachPhim = (danhSachPhim, diaChi) => {
        const limit = danhSachPhim.length - 1;
        const contentLichChieu = (phim) => {
            return phim.lstLichChieuTheoPhim.map((item, index) => {
                const time = moment(item.ngayChieuGioChieu).format("hh:MM A");
                return (
                    <NavLink to={`/checkout/${item.maLichChieu}`} key={index}>
                        <Tag color="green" style={{ margin: 0 }}>
                            {time}
                        </Tag>
                    </NavLink>
                );
            });
        };
        const contentPhim = () =>
            danhSachPhim.map((phim, index) => {
                return (
                    <div className="py-5" key={index}>
                        <div className="space-y-3">
                            <div className="flex gap-2">
                                <div
                                    className="flex w-16 h-16 items-center bg-cover bg-no-repeat bg-center"
                                    style={{
                                        backgroundImage: `url('${phim.hinhAnh}'), url('https://picsum.photos/64')`,
                                    }}
                                ></div>
                                <div className="flex flex-col justify-between">
                                    <strong className="text-lg">{phim.tenPhim}</strong>
                                    <p className="m-0">{createText(diaChi, 40)}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-16"></div>
                                <div className="grid grid-cols-6 gap-4">
                                    {contentLichChieu(phim)}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        return (
            <div
                className=" overflow-auto divide-y divide-slate-400/25"
                style={{ height: "465px" }}
            >
                {contentPhim()}
            </div>
        );
    };

    const renderCumRap = (listCumRap) => {
        const labelCumRap = (cumRap) => {
            const arrTen = cumRap.tenCumRap.split("-");
            const tenRap = arrTen[0].trim();
            const tenCumRap = arrTen[1].trim();
            const color = () => {
                if (tenRap === "BHD Star Cineplex") return "#81ff81";
                if (tenRap === "CGV") return "red";
                if (tenRap === "CNS") return "#83fef4";
                if (tenRap === "GLX") return "orange";
                if (tenRap === "Lotte") return "#ff4c4c";
                if (tenRap === "MegaGS") return "gold";
            };
            return (
                <div className="flex gap-2 ">
                    <div className="flex w-14 items-center">
                        <img className="w-full" src={cumRap.hinhAnh} />
                    </div>
                    <div className="text-start">
                        <p className="m-0">
                            <span style={{ color: color() }}>{tenRap}</span>
                            <span> - {tenCumRap}</span>
                        </p>
                        <p className="m-0">{createText(cumRap.diaChi, 40)}</p>
                        <p className="m-0">Chi Tiết</p>
                    </div>
                </div>
            );
        };
        const items = listCumRap.map((cumRap, index) => {
            return {
                label: labelCumRap(cumRap),
                key: index,
                children: renderDanhSachPhim(cumRap.danhSachPhim, cumRap.diaChi),
            };
        });
        return <Tabs tabPosition="left" items={items} style={{ height: "465px" }} />;
    };

    const renderRap = () => {
        return theaterSystem.map((item, index) => {
            return {
                label: <img className="rounded-full w-12" src={item.logo} />,
                key: index,
                children: renderCumRap(item.lstCumRap),
            };
        });
    };

    return (
        <div className="container mx-auto py-24">
            <Tabs tabPosition="left" items={renderRap()} style={{ height: "465px" }} />
        </div>
    );
}
export default HomeMenu;
