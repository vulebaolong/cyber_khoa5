import { Tabs } from "antd";

function DetailTabs(props) {
    const { infoFilm } = props;
    console.log(infoFilm.heThongRapChieu);
    const renderRap = () => {
        return infoFilm.heThongRapChieu.map((item, index) => {
            return {
                label: <img className="rounded-full w-12" src={item.logo} />,
                key: index,
                children: <div>123</div>,
            };
        });
    };
    const renderTabLichChieu = () => {
        return (
            <Tabs
                style={{ width: "70%", zIndex: 3 }}
                tabPosition="left"
                items={renderRap()}
            />
        );
    };
    const renderTabContainer = () => {
        return ["Lịch Chiếu", "Thông Tin", "Đánh Giá"].map((item, index) => {
            return {
                label: item,
                key: index,
                children: `Content of Tab ${index}`,
            };
        });
    };
    return (
        <div className="" style={{ width: "80%" }}>
            <Tabs tabPosition="top" items={renderTabContainer()} />
        </div>
    );
}
export default DetailTabs;
