import { Tabs, Tag } from "antd";
import style from "./DetailTabs.module.css";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { Typography } from "antd";
const { Title } = Typography;

function DetailTabs(props) {
    const { infoFilm } = props;
    console.log(infoFilm.heThongRapChieu);
    const createText = (text, length) => {
        return text.length > length ? text.slice(0, length) + "..." : text;
    };
    const contentLichChieu = (phim) => {
        return phim.map((item, index) => {
            const time = moment(item.ngayChieuGioChieu).format("hh:MM A");
            return (
                <NavLink to={`/checkout/${123}`} key={index}>
                    <Tag color="green" style={{ margin: 0 }}>
                        {time}
                    </Tag>
                </NavLink>
            );
        });
    };
    const renderCumRap = (listCumRap) => {
        return listCumRap.map((cumRap, index) => {
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
                <div className="space-y-3">
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
                    <div className="flex gap-2">
                        <div className="w-16"></div>
                        <div className="grid grid-cols-6 gap-4">
                            {contentLichChieu(cumRap.lichChieuPhim)}
                        </div>
                    </div>
                </div>
            );
        });
    };
    const renderRap = () => {
        return infoFilm.heThongRapChieu?.map((item, index) => {
            return {
                label: (
                    <div className="flex items-center gap-2">
                        <img className="rounded-full w-12" src={item.logo} />
                        <Title style={{ margin: 0 }} level={5}>
                            {item.tenHeThongRap}
                        </Title>
                    </div>
                ),
                key: index,
                children: renderCumRap(item.cumRapChieu),
            };
        });
    };
    const renderTabLichChieu = () => {
        return (
            <Tabs
                style={{ width: "100%", zIndex: 3 }}
                tabPosition="left"
                items={renderRap()}
            />
        );
    };
    const renderTabContainer = () => {
        return ["Lịch Chiếu", "Thông Tin", "Đánh Giá"].map((item, index) => {
            let content = ``;
            if (index === 0) {
                content = renderTabLichChieu();
            }
            return {
                label: item,
                key: index,
                children: content,
            };
        });
    };
    return (
        <div className="flex justify-center items-center" style={{ width: "100%" }}>
            <Tabs
                tabPosition="top"
                items={renderTabContainer()}
                style={{ width: "50%" }}
                className={`${style.tabs}`}
            />
        </div>
    );
}
export default DetailTabs;
