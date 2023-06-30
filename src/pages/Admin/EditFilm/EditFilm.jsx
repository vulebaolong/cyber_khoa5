import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKeyREDU } from "../../../redux/slices/MenuAdminSlice";
import { Button, DatePicker, Form, Input, Rate, Switch, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { editFilmMID, getInfoFilmMID } from "../../../redux/slices/QuanLyPhimSlice";
import moment from "moment/moment";
import _ from "lodash";
import dayjs from "dayjs";
import { GROUP_ID } from "../../../Api/BaseApi";
import style from "./EditFilm.module.css";

function EditFilm() {
    const [form] = Form.useForm();
    const location = useLocation();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { infoFilm } = useSelector((state) => state.QuanLyPhimSlice);
    console.log(infoFilm);
    let srcImage = "";
    if (!_.isEmpty(infoFilm)) {
        srcImage = infoFilm.hinhAnh;
    }
    useEffect(() => {
        const item = location.pathname.split("/");
        const result = {
            selectedKeys: `/${item[1]}/${item[2]}/${item[3]}`,
            openKeys: `/${item[1]}/${item[2]}`,
        };
        console.log(result);
        dispatch(setKeyREDU(result));

        // Lấy thông tin film
        if (id) dispatch(getInfoFilmMID(id));
    }, []);

    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.addEventListener("load", () => callback(reader.result));
    };
    const normFile = (info) => {
        console.log(info);
        console.log(info.file);
        const file = info.file.originFileObj;
        getBase64(file, (url) => {
            setLoading(false);
            setImageUrl(url);
        });
        return file;
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    const initialValues = {
        tenPhim: infoFilm.tenPhim,
        trailer: infoFilm.trailer,
        moTa: infoFilm.moTa,
        ngayKhoiChieu: dayjs(
            moment(infoFilm.ngayKhoiChieu).format("DD-MM-YYYY"),
            "DD-MM-YYYY"
        ),
        dangChieu: infoFilm.dangChieu,
        sapChieu: infoFilm.sapChieu,
        hot: infoFilm.hot,
        danhGia: infoFilm.danhGia,
        hinhAnh: null,
    };
    useEffect(() => {
        form.resetFields();
    }, [initialValues]);

    const onFinish = (values) => {
        values.ngayKhoiChieu = moment(values.ngayKhoiChieu.$d).format("DD/MM/YYYY");
        values.maPhim = infoFilm.maPhim;
        values.maNhom = GROUP_ID;

        console.log("values", values);
        const formData = new FormData();
        _.forEach(values, (value, key) => {
            // console.log(`${key}: ${value}`);
            // formData.append(key, value);

            if (key !== "hinhAnh") {
                formData.append(key, value);
            }
            if (key === "hinhAnh" && values.hinhAnh !== null) {
                formData.append("File", values.hinhAnh, values.name);
            }
        });
        dispatch(editFilmMID(formData));
    };
    const renderEditFilm = () => {
        return (
            <>
                <Form
                    form={form}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    onFinish={onFinish}
                    initialValues={initialValues}
                >
                    <Form.Item label="Tên Phim" name="tenPhim">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Trailer" name="trailer">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Mô tả" name="moTa">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Ngày khởi chiếu" name="ngayKhoiChieu">
                        <DatePicker format={"DD/MM/YYYY"} />
                    </Form.Item>
                    <Form.Item
                        label="Đang chiếu"
                        name="dangChieu"
                        valuePropName="checked"
                    >
                        <Switch />
                    </Form.Item>
                    <Form.Item label="Sắp chiếu" name="sapChieu" valuePropName="checked">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="Hot" name="hot" valuePropName="checked">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="Đánh Giá" name="danhGia">
                        <Rate allowHalf />
                    </Form.Item>
                    <Form.Item
                        name="hinhAnh"
                        label="Hình ảnh"
                        valuePropName="file"
                        getValueFromEvent={normFile}
                    >
                        <Upload
                            listType="picture-card"
                            className={`avatar-uploader ${style.upload}`}
                            showUploadList={false}
                            customRequest={({ file, onSuccess }) => {
                                setTimeout(() => {
                                    onSuccess("ok");
                                }, 0);
                            }}
                        >
                            <div
                                className="flex justify-center items-center"
                                style={{
                                    flex: 1,
                                    height: "102px",
                                    verticalAlign: "top",
                                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                                    border: "1px solid #424242",
                                    borderRadius: "8px",
                                    transition: "border-color 0.3s",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    className="h-full"
                                    src={imageUrl === "" ? srcImage : imageUrl}
                                    alt="avatar"
                                />
                            </div>

                            <div className="flex-1">{uploadButton}</div>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label=""
                        wrapperCol={{
                            offset: 4,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Button
                        </Button>
                    </Form.Item>
                </Form>
            </>
        );
    };

    const contentEditFilm = () => {
        if (id === undefined) {
            return (
                <div className="w-full h-full flex items-center justify-center">
                    <h2 className="text-3xl	font-bold	">
                        Vui Lòng Chọn Phim Muốn Chỉnh Sửa
                    </h2>
                </div>
            );
        }
        if (id) return renderEditFilm();
    };
    return <>{contentEditFilm()}</>;
}
export default EditFilm;
