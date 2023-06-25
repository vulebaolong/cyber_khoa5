import { vlbl } from "vlbl";
import { DANG_NHAP } from "./../constants/QuanLyNguoiDungContants";
import { USER_LOGIN } from "../../Api/BaseApi";

const initialState = {
    userLogin: localStorage.getItem(USER_LOGIN)
        ? JSON.parse(localStorage.getItem(USER_LOGIN))
        : {},
};

export const QuanLyNguoiDungReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case DANG_NHAP: {
            const copyState = vlbl.copy(state);
            copyState.userLogin = payload;
            localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
            return { ...state, userLogin: copyState.userLogin };
        }

        default:
            return state;
    }
};
