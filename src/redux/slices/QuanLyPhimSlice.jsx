import { createSlice } from "@reduxjs/toolkit";
import { quanLyPhimApi } from "../../Api/QuanLyPhimApi";
import { STATE_CODE } from "../../Api/BaseApi";

const initialState = {
    listBanners: [],
    listFilms: [],
    listFilmsDisplay: [],
    oneFilm: {},
    imageUrl: "",
    infoFilm: {},
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
        getInfoFilmREDU: (state, { type, payload }) => {
            state.infoFilm = payload;
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
    getInfoFilmREDU,
} = QuanLyPhimSlice.actions;

export default QuanLyPhimSlice.reducer;

// -------------------action thunk ------------------

//getListBannerMID
export const getListBannerMID = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhimApi.getListBanner();
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
            const { data, status } = await quanLyPhimApi.getListFilms();
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
            const { data, status } = await quanLyPhimApi.getOneFilm(requestData);
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
            const { data, status } = await quanLyPhimApi.addFilm(requestData);
            console.log("addFilmMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            // dispatch(getOneFilmREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

//getInfoFilmMID
export const getInfoFilmMID = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhimApi.getInfoFilm(requestData);
            console.log("getInfoFilmMID - MID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            // truyền dữ liệu lên reducer
            dispatch(getInfoFilmREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

//editFilmMID
export const editFilmMID = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhimApi.editFilm(requestData);
            console.log("editFilmMID - MID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            // truyền dữ liệu lên reducer
            // dispatch(getInfoFilmREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};
