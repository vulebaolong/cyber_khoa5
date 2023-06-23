import { STATE_CODE } from "../../Api/BaseApi";
import { quanLyRap } from "../../Api/QuanLyRapApi";
import {
    GET_THEATER_SYSTEM,
    LAY_THONG_TIN_LICH_CHIEU,
} from "../constants/QuanlyRapContants";

//getTheaterSystem
export const getTheaterSystem = (data) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyRap.getTheaterSystem();
            console.log("getTheaterSystem", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch({
                type: GET_THEATER_SYSTEM,
                payload: data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

//layThongTinLichChieu
export const layThongTinLichChieu = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyRap.layThongTinLichChieu(requestData);
            console.log("layThongTinLichChieu", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch({
                type: LAY_THONG_TIN_LICH_CHIEU,
                payload: data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
