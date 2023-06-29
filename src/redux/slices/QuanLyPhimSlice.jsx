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
        getListBanners: (state, { type, payload }) => {
            state.listBanners = payload;
        },
        getListFilms: (state, { type, payload }) => {
            state.listFilms = payload;
        },
        getOneFilm: (state, { type, payload }) => {
            state.oneFilm = payload;
        },
        getAllFilm: (state, { type, payload }) => {
            state.listFilmsDisplay = state.listFilms;
        },
        getPhimDangChieu: (state, { type, payload }) => {
            state.listFilmsDisplay = state.listFilms.filter((film) => {
                if (film.dangChieu) return true;
            });
        },
        getPhimSapChieu: (state, { type, payload }) => {
            state.listFilmsDisplay = state.listFilms.filter((film) => {
                if (film.sapChieu) return true;
            });
        },
        setImageUrl: (state, { type, payload }) => {
            state.imageUrl = payload;
        },
    },
});

export const {
    getListBanners,
    getListFilms,
    getOneFilm,
    getAllFilm,
    getPhimDangChieu,
    getPhimSapChieu,
    setImageUrl,
} = QuanLyPhimSlice.actions;

export default QuanLyPhimSlice.reducer;

// -------------------action thunk ------------------
export const getListBannerAction = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhim.getListBanner();
            console.log("getListBanner", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(getListBanners(data.content));
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

            dispatch(getListFilms(data.content));
            dispatch(getAllFilm(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

export const getOneFilmAction = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhim.getOneFilm(requestData);
            console.log("getOneFilm", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(getOneFilm(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

export const addFilmAction = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhim.addFilm(requestData);
            console.log("getOneFilm", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            // dispatch(getOneFilm(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};
