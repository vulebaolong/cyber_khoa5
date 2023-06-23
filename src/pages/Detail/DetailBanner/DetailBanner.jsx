import moment from "moment";
const { Paragraph, Text } = Typography;
import { Progress, Rate, Tabs, Typography } from "antd";

function DetailBanner(props) {
    const { infoFilm } = props;
    return (
        <div style={{ width: "70%", zIndex: 3, position: "relative" }}>
            <div className="col-span-6 col-start-3 flex gap-5">
                <div style={{ width: "45%" }}>
                    <img src={infoFilm.hinhAnh} className="w-full" alt="" />
                </div>
                <div className="basis-full flex items-center">
                    <div className="space-y-2">
                        <p className="m-0">
                            {moment(infoFilm.ngayKhoiChieu).format("DD.MM.YYYY")}
                        </p>
                        <p className="text-2xl">
                            <strong>{infoFilm.tenPhim}</strong>
                        </p>
                        <Paragraph
                            ellipsis={{
                                rows: 2,
                                expandable: true,
                                symbol: "more",
                            }}
                            className="text-slate-500 dark:text-slate-400"
                        >
                            {infoFilm.moTa}
                        </Paragraph>
                    </div>
                </div>
                <div
                    className="flex items-center justify-center w-full"
                    style={{ width: "45%" }}
                >
                    <div className="space-y-3 flex flex-col">
                        <Progress
                            strokeColor={"#7ed321"}
                            type="circle"
                            percent={+infoFilm.danhGia * 10}
                        />
                        <Rate allowHalf value={+infoFilm.danhGia / 2} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailBanner;
