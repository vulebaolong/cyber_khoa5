import { createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungApi } from "../../Api/QuanLyNguoiDungApi";
import { STATE_CODE, TOKEN, USER_LOGIN } from "../../Api/BaseApi";
import { history } from "../../App";

const initialState = {
    userLogin: localStorage.getItem(USER_LOGIN)
        ? JSON.parse(localStorage.getItem(USER_LOGIN))
        : {},
};

const QuanLyNguoiDungSlice = createSlice({
    name: "QuanLyNguoiDungSlice",
    initialState,
    reducers: {
        dangNhapREDU: (state, { type, payload }) => {
            state.userLogin = payload;
        },
    },
});

export const { dangNhapREDU } = QuanLyNguoiDungSlice.actions;

export default QuanLyNguoiDungSlice.reducer;

// -------------------action thunk ------------------

//dangNhapActionMID
export const dangNhapActionMID = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDungApi.dangNhap(requestData);
            console.log("dangNhapActionMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));
            localStorage.setItem(TOKEN, JSON.stringify(data.content[TOKEN]));

            dispatch(dangNhapREDU(data.content));

            history.navigate(-1);
        } catch (error) {
            console.log(error);
        }
    };
};
