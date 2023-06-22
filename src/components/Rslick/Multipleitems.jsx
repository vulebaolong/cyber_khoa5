import Slider from "react-slick";
const settingDefault = {
    draggable: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
};
function Multipleitems({ children, settings }) {
    settings = { ...settingDefault, ...settings };

    return <Slider {...settings}>{children}</Slider>;
}
export default Multipleitems;
