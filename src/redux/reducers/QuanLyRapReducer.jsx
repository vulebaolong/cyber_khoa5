import { vlbl } from "vlbl";
import { GET_THEATER_SYSTEM } from "../constants/QuanlyRapContants";

const initialState = {
    theaterSystem: [],
};

export const QuanLyRapReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_THEATER_SYSTEM: {
            console.log(123);
            const copyState = vlbl.copy(state);
            copyState.theaterSystem = payload;
            return { ...state, theaterSystem: copyState.theaterSystem };
        }

        default:
            return state;
    }
};
