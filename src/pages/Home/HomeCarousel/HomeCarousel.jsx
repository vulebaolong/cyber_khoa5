import { Carousel } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListBannerAction } from "./../../../redux/actions/QuanLyPhimAction";

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
    const { listBanners } = useSelector((state) => state.QuanLyPhimReducer);
    useEffect(() => {
        dispatch(getListBannerAction());
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

    return <Carousel autoplay>{renderCarousel()}</Carousel>;
}
export default HomeCarousel;
