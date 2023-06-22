import { Radio, Space, Tabs, Tag } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheaterSystem } from "../../../redux/actions/QuanLyRapAction";

function HomeMenu() {
    const dispatch = useDispatch();
    const { theaterSystem } = useSelector((state) => state.QuanLyRapReducer);
    console.log(theaterSystem);
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };

    useEffect(() => {
        dispatch(getTheaterSystem());
    }, []);

    const createText = (text, length) => {
        return text.length > length ? text.slice(0, length) + "..." : text;
    };

    const renderDanhSachPhim = (danhSachPhim) => {
        console.log("đấy", danhSachPhim.length);
        const limit = danhSachPhim.length - 1;
        return (
            <div className="space-y-4">
                {danhSachPhim.map((phim, index) => {
                    return (
                        <>
                            <div className="" key={index}>
                                <div className="flex w-14 items-center">
                                    <img className="w-full" src={phim.hinhAnh} />
                                </div>
                                tenPhim: {phim.tenPhim}
                            </div>
                            {index !== limit ? <hr className="opacity-25" /> : ""}
                        </>
                    );
                })}
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
                <div className="flex gap-2">
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
                children: renderDanhSachPhim(cumRap.danhSachPhim),
            };
        });
        return <Tabs tabPosition="left" items={items} />;
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
        <div className="container mx-auto">
            <Tabs tabPosition="left" items={renderRap()} />
        </div>
    );
}
export default HomeMenu;
