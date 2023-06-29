import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import DetailBanner from "./DetailBanner/DetailBanner";
import DetailTabs from "./DetailTabs/DetailTabs";
import { layThongTinLichChieuMID } from "../../redux/slices/QuanLyRapSlice";
import { useParams } from "react-router-dom";

function Detail(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { thongTinLichChieu: infoFilm } = useSelector((state) => state.QuanLyRapSlice);
    console.log(infoFilm);
    useEffect(() => {
        dispatch(layThongTinLichChieuMID(id));
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
            <div className="py-24 container mx-auto">
                <DetailTabs infoFilm={infoFilm} />
            </div>
        </>
    );
}
export default Detail;
