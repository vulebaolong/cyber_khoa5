import { vlbl } from "vlbl";
import {
    GET_LIST_BANNERS,
    GET_LIST_FILMS,
    GET_PHIM_DANG_CHIEU,
    GET_PHIM_SAP_CHIEU,
    GET_TAT_CA_PHIM,
} from "../constants/QuanLyPhimContants";

const initialState = {
    listBanners: [],
    listFilms: [],
    listFilmsDisplay: [],
};

export const QuanLyPhimReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_LIST_BANNERS: {
            const copyState = vlbl.copy(state);
            copyState.listBanners = payload;
            return { ...state, listBanners: copyState.listBanners };
        }

        case GET_LIST_FILMS: {
            const copyState = vlbl.copy(state);
            copyState.listFilms = payload;
            return { ...state, listFilms: copyState.listFilms };
        }

        case GET_TAT_CA_PHIM: {
            const copyState = vlbl.copy(state);
            copyState.listFilmsDisplay = copyState.listFilms;
            return { ...state, listFilmsDisplay: copyState.listFilmsDisplay };
        }

        case GET_PHIM_DANG_CHIEU: {
            const copyState = vlbl.copy(state);
            copyState.listFilmsDisplay = copyState.listFilms.filter((film) => {
                if (film.dangChieu) return true;
            });
            return { ...state, listFilmsDisplay: copyState.listFilmsDisplay };
        }

        case GET_PHIM_SAP_CHIEU: {
            const copyState = vlbl.copy(state);
            copyState.listFilmsDisplay = copyState.listFilms.filter((film) => {
                if (film.sapChieu) return true;
            });
            return { ...state, listFilmsDisplay: copyState.listFilmsDisplay };
        }

        default:
            return state;
    }
};
