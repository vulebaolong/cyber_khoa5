import { createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungApi } from "../../Api/QuanLyNguoiDungApi";
import { STATE_CODE, USER_LOGIN } from "../../Api/BaseApi";
import { history } from "./../../App";

const initialState = {
    userLogin: localStorage.getItem(USER_LOGIN)
        ? JSON.parse(localStorage.getItem(USER_LOGIN))
        : {},
};

const QuanLyNguoiDungSlice = createSlice({
    name: "QuanLyNguoiDungSlice",
    initialState,
    reducers: {
        dangNhap: (state, { type, payload }) => {
            state.userLogin = payload;
            localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
        },
    },
});

export const { dangNhap } = QuanLyNguoiDungSlice.actions;

export default QuanLyNguoiDungSlice.reducer;

// -------------------action thunk ------------------

//dangNhap
export const dangNhapAction = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDungApi.dangNhap(requestData);
            console.log("dangNhap", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(dangNhap(data.content));

            history.goBack();
        } catch (error) {
            console.log(error);
        }
    };
};
