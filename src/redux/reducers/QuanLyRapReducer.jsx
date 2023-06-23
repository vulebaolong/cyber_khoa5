import { vlbl } from "vlbl";
import {
    GET_THEATER_SYSTEM,
    LAY_THONG_TIN_LICH_CHIEU,
} from "../constants/QuanlyRapContants";

const initialState = {
    theaterSystem: [],
    thongTinLichChieu: [],
};

export const QuanLyRapReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_THEATER_SYSTEM: {
            const copyState = vlbl.copy(state);
            copyState.theaterSystem = payload;
            return { ...state, theaterSystem: copyState.theaterSystem };
        }

        case LAY_THONG_TIN_LICH_CHIEU: {
            const copyState = vlbl.copy(state);
            copyState.thongTinLichChieu = payload;
            return { ...state, thongTinLichChieu: copyState.thongTinLichChieu };
        }

        default:
            return state;
    }
};
