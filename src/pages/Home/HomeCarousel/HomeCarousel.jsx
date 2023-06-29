import { Carousel } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getListBannerMID,
    getListBannersREDU,
} from "../../../redux/slices/QuanLyPhimSlice";

const contentStyle = {
    height: "80vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

function HomeCarousel() {
    const dispatch = useDispatch();
    const { listBanners } = useSelector((state) => state.QuanLyPhimSlice);
    useEffect(() => {
        dispatch(getListBannerMID());
    }, []);

    const renderCarousel = () => {
        return listBanners.map((item) => {
            return (
                <div key={item.maBanner}>
                    <div
                        style={{
                            ...contentStyle,
                            backgroundImage: `url(${item.hinhAnh})`,
                        }}
                    ></div>
                </div>
            );
        });
    };

    return (
        <Carousel className="py-24" autoplay>
            {renderCarousel()}
        </Carousel>
    );
}
export default HomeCarousel;
