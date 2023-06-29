import { createSlice } from "@reduxjs/toolkit";
import { quanLyPhim } from "../../Api/QuanLyPhimApi";
import { STATE_CODE } from "../../Api/BaseApi";

const initialState = {
    listBanners: [],
    listFilms: [],
    listFilmsDisplay: [],
    oneFilm: {},
    imageUrl: "",
};

const QuanLyPhimSlice = createSlice({
    name: "QuanLyPhimSlice",
    initialState,
    reducers: {
        getListBannersREDU: (state, { type, payload }) => {
            state.listBanners = payload;
        },
        getListFilmsREDU: (state, { type, payload }) => {
            state.listFilms = payload;
        },
        getOneFilmREDU: (state, { type, payload }) => {
            state.oneFilm = payload;
        },
        getAllFilmREDU: (state, { type, payload }) => {
            state.listFilmsDisplay = state.listFilms;
        },
        getPhimDangChieuREDU: (state, { type, payload }) => {
            state.listFilmsDisplay = state.listFilms.filter((film) => {
                if (film.dangChieu) return true;
            });
        },
        getPhimSapChieuREDU: (state, { type, payload }) => {
            state.listFilmsDisplay = state.listFilms.filter((film) => {
                if (film.sapChieu) return true;
            });
        },
    },
});

export const {
    getListBannersREDU,
    getListFilmsREDU,
    getOneFilmREDU,
    getAllFilmREDU,
    getPhimDangChieuREDU,
    getPhimSapChieuREDU,
} = QuanLyPhimSlice.actions;

export default QuanLyPhimSlice.reducer;

// -------------------action thunk ------------------

//getListBannerMID
export const getListBannerMID = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhim.getListBanner();
            console.log("getListBannerMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(getListBannersREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

//getListFilmsREDU
export const getListFilmsMID = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhim.getListFilms();
            console.log("getListFilmsMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(getListFilmsREDU(data.content));
            dispatch(getAllFilmREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

//getOneFilmREDU
export const getOneFilmMID = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhim.getOneFilm(requestData);
            console.log("getOneFilmMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(getOneFilmREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

//addFilmMID
export const addFilmMID = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhim.addFilm(requestData);
            console.log("addFilmMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            // dispatch(getOneFilmREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};
