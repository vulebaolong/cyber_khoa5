import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Rate,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from "antd";
import moment from "moment";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GROUP_ID } from "../../../Api/BaseApi";
import _ from "lodash";
import { addFilmMID } from "../../../redux/slices/QuanLyPhimSlice";
const { TextArea } = Input;

function AddFilm() {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState();
    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        values.ngayKhoiChieu = moment(values.ngayKhoiChieu.$d).format("DD/MM/YYYY");
        values.maNhom = GROUP_ID;
        console.log("Success:", values);

        const formData = new FormData();

        _.forEach(values, (value, key) => {
            // console.log(`${key}: ${value}`);
            if (key !== "hinhAnh") {
                formData.append(key, value);
            }
            if (key === "hinhAnh") {
                formData.append("File", values.hinhAnh, values.name);
            }
        });
        console.log(formData.get("File"));
        dispatch(addFilmMID(formData));
    };

    const initialValues = {
        tenPhim: "",
        trailer: "",
        moTa: "",
        ngayKhoiChieu: "",
        dangChieu: false,
        sapChieu: false,
        hot: false,
        danhGia: 0,
        hinhAnh: "",
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
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.addEventListener("load", () => callback(reader.result));
    };
    const normFile = (info) => {
        const file = info.file.originFileObj;
        getBase64(file, (url) => {
            setLoading(false);
            setImageUrl(url);
        });
        return file;
    };
    return (
        <>
            <Form
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
                <Form.Item label="Đang chiếu" name="dangChieu" valuePropName="checked">
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
                        className="avatar-uploader"
                        showUploadList={false}
                        customRequest={({ file, onSuccess }) => {
                            setTimeout(() => {
                                onSuccess("ok");
                            }, 0);
                        }}
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                    width: "100%",
                                }}
                            />
                        ) : (
                            uploadButton
                        )}
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
}
export default AddFilm;
