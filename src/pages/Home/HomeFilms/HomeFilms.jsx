import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Film from "../../../components/Film/Film";
import Multipleitems from "../../../components/Rslick/Multipleitems";
import { Radio } from "antd";
import {
    getAllFilmREDU,
    getListFilmsMID,
    getPhimDangChieuREDU,
    getPhimSapChieuREDU,
} from "../../../redux/slices/QuanLyPhimSlice";

function HomeFilms() {
    const dispatch = useDispatch();
    const { listFilmsDisplay } = useSelector((state) => state.QuanLyPhimSlice);
    useEffect(() => {
        dispatch(getListFilmsMID());
    }, []);

    const renderFilms = () => {
        return listFilmsDisplay.map((film) => {
            return <Film key={film.maPhim} film={film} />;
        });
    };

    const handleOnchange = (e) => {
        if (e.target.value === "phimDangChieu") {
            dispatch(getPhimDangChieuREDU());
        }
        if (e.target.value === "phimSapChieu") {
            dispatch(getPhimSapChieuREDU());
        }
        if (e.target.value === "tatCaPhim") {
            dispatch(getAllFilmREDU());
        }
    };

    return (
        <section className="my-24">
            <div className="container mx-auto">
                <Radio.Group defaultValue="tatCaPhim" onChange={handleOnchange}>
                    <Radio.Button value="tatCaPhim">Tất cả phim</Radio.Button>
                    <Radio.Button value="phimDangChieu">Phim đang chiếu</Radio.Button>
                    <Radio.Button value="phimSapChieu">Phim sắp chiếu</Radio.Button>
                </Radio.Group>
                <Multipleitems>{renderFilms()}</Multipleitems>
            </div>
        </section>
    );
}
export default HomeFilms;
