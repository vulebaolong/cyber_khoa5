import { STATE_CODE } from "../../Api/BaseApi";
import { quanLyPhim } from "../../Api/QuanLyPhimApi";
import {
    GET_LIST_BANNERS,
    GET_LIST_FILMS,
    GET_ONE_FILM,
    GET_PHIM_DANG_CHIEU,
    GET_PHIM_SAP_CHIEU,
    GET_TAT_CA_PHIM,
} from "../constants/QuanLyPhimContants";

export const getListBannerAction = (requestData) => {
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

export const getListFilmsAction = (requestData) => {
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

export const getTatCaPhimAction = (requestData) => {
    return {
        type: GET_TAT_CA_PHIM,
        payload: requestData,
    };
};

export const getPhimDangChieuAction = (requestData) => {
    return {
        type: GET_PHIM_DANG_CHIEU,
        payload: requestData,
    };
};

export const getPhimSapChieuAction = (requestData) => {
    return {
        type: GET_PHIM_SAP_CHIEU,
        payload: requestData,
    };
};

export const getOneFilmAction = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhim.getOneFilm(requestData);
            console.log("getOneFilm", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch({
                type: GET_ONE_FILM,
                payload: data.content,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
