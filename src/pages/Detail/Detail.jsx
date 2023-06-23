import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneFilmAction } from "../../redux/actions/QuanLyPhimAction";
import style from "./Detail.module.css";
import moment from "moment";
import { Progress, Rate, Tabs, Typography } from "antd";
import { layThongTinLichChieu } from "../../redux/actions/QuanLyRapAction";
import DetailBanner from "./DetailBanner/DetailBanner";
import DetailTabs from "./DetailTabs/DetailTabs";

function Detail(props) {
    const { id } = props.match.params;
    const dispatch = useDispatch();
    const { thongTinLichChieu: infoFilm } = useSelector(
        (state) => state.QuanLyRapReducer
    );
    console.log(infoFilm);
    useEffect(() => {
        dispatch(layThongTinLichChieu(id));
    }, []);

    return (
        <>
            <div
                className={`flex justify-center items-center ${style.backGroundDetail}`}
                style={{
                    backgroundImage: `url(${infoFilm.hinhAnh})`,
                    height: "80vh",
                }}
            >
                <DetailBanner infoFilm={infoFilm} />
            </div>
            <div className="py-24 flex justify-center items-center">
                <DetailTabs infoFilm={infoFilm} />
            </div>
        </>
    );
}
export default Detail;
