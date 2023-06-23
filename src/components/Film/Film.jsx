import { Typography } from "antd";
import { NavLink } from "react-router-dom";

const { Paragraph, Text } = Typography;

function Film(props) {
    const { film } = props;
    return (
        <div className="p-4">
            <div
                className="flex flex-col items-center bg-gray-800 bg-opacity-40 px-8 pt-16 pb-16 rounded-lg  text-center "
                style={{ minHeight: "700px" }}
            >
                <div
                    className="w-full h-96 bg-cover bg-no-repeat bg-top"
                    style={{ backgroundImage: `url("${film.hinhAnh}")` }}
                ></div>

                <Typography.Title
                    ellipsis={{ rows: 1 }}
                    level={3}
                    className="my-5"
                    style={{ width: "100%" }}
                >
                    {film.tenPhim}
                </Typography.Title>

                <Paragraph
                    style={{ marginBottom: "auto" }}
                    className="text-start"
                    ellipsis={{ rows: 4 }}
                >
                    {film.moTa}
                </Paragraph>
                <NavLink
                    to={`/detail/${film.maPhim}`}
                    className="text-blue-400 inline-flex items-center"
                >
                    Đặt vé
                    <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </NavLink>
            </div>
        </div>
    );
}
export default Film;
