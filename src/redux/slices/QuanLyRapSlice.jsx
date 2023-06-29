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
        getTheaterSystemREDU: (state, { type, payload }) => {
            state.theaterSystem = payload;
        },
        layThongTinLichChieuREDU: (state, { type, payload }) => {
            state.thongTinLichChieu = payload;
        },
    },
});

export const { getTheaterSystemREDU, layThongTinLichChieuREDU } = QuanLyRapSlice.actions;

export default QuanLyRapSlice.reducer;

// -------------------action thunk ------------------

//getTheaterSystemMID
export const getTheaterSystemMID = (data) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyRapApi.getTheaterSystem();
            console.log("getTheaterSystemMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(getTheaterSystemREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

//layThongTinLichChieuMID
export const layThongTinLichChieuMID = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyRapApi.layThongTinLichChieu(requestData);
            console.log("layThongTinLichChieuMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(layThongTinLichChieuREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};
