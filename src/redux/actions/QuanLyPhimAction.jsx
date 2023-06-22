import { STATE_CODE } from "../../Api/BaseApi";
import { quanLyPhim } from "../../Api/QuanLyPhimApi";
import {
    GET_LIST_BANNERS,
    GET_LIST_FILMS,
    GET_PHIM_DANG_CHIEU,
    GET_PHIM_SAP_CHIEU,
    GET_TAT_CA_PHIM,
} from "../constants/QuanLyPhimContants";

export const getListBannerAction = (data) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhim.getListBanner();
            console.log("getListBanner", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch({
                type: GET_LIST_BANNERS,
                payload: data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getListFilmsAction = (data) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhim.getListFilms();
            console.log("getListFilms", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch({
                type: GET_LIST_FILMS,
                payload: data.content,
            });
            dispatch({
                type: GET_TAT_CA_PHIM,
                payload: data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getTatCaPhim = (data) => {
    return {
        type: GET_TAT_CA_PHIM,
        payload: data,
    };
};

export const getPhimDangChieu = (data) => {
    return {
        type: GET_PHIM_DANG_CHIEU,
        payload: data,
    };
};

export const getPhimSapChieu = (data) => {
    return {
        type: GET_PHIM_SAP_CHIEU,
        payload: data,
    };
};
