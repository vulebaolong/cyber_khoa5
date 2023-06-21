import { vlbl } from "vlbl";
import { GET_LIST_BANNER } from "../constants/QuanLyPhimContants";

const initialState = {
    listBanner: [],
};

export const QuanLyPhimReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_LIST_BANNER: {
            const copyState = vlbl.copy(state);
            copyState.listBanner = payload;
            return { ...state, listBanner: copyState.listBanner };
        }

        default:
            return state;
    }
};
