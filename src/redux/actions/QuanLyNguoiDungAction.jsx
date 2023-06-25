import { STATE_CODE } from "../../Api/BaseApi";
import { history } from "../../App";
import { DANG_NHAP } from "../constants/QuanLyNguoiDungContants";
import { quanLyNguoiDung } from "./../../Api/QuanLyNguoiDungApi";

//dangNhap
export const dangNhap = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDung.dangNhap(requestData);
            console.log("dangNhap", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch({
                type: DANG_NHAP,
                payload: data.content,
            });

            history.goBack();
        } catch (error) {
            console.log(error);
        }
    };
};
