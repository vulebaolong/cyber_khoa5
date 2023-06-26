import { createSlice } from "@reduxjs/toolkit";
import { quanLyRapApi } from "./../../Api/QuanLyRapApi";
import { STATE_CODE } from "../../Api/BaseApi";

const initialState = {
    theaterSystem: [],
    thongTinLichChieu: [],
};

const QuanLyRapSlice = createSlice({
    name: "QuanLyRapSlice",
    initialState,
    reducers: {
        getTheaterSystem: (state, { type, payload }) => {
            state.theaterSystem = payload;
        },
        layThongTinLichChieu: (state, { type, payload }) => {
            state.thongTinLichChieu = payload;
        },
    },
});

export const { getTheaterSystem, layThongTinLichChieu } = QuanLyRapSlice.actions;

export default QuanLyRapSlice.reducer;

// -------------------action thunk ------------------

//getTheaterSystem
export const getTheaterSystemAction = (data) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyRapApi.getTheaterSystem();
            console.log("getTheaterSystem", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(getTheaterSystem(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

//layThongTinLichChieu
export const layThongTinLichChieuAction = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyRapApi.layThongTinLichChieu(requestData);
            console.log("layThongTinLichChieu", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(layThongTinLichChieu(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};
