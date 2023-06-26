import { createSlice } from "@reduxjs/toolkit";
import { quanLyDatVeApi } from "./../../Api/QuanLyDatVeApi";
import { STATE_CODE } from "../../Api/BaseApi";

const initialState = {
    danhSachPhongVe: {},
    danhSachGheDangChon: [],
};

const QuanLyDatVeSlice = createSlice({
    name: "QuanLyDatVeSlice",
    initialState,
    reducers: {
        layDanhSachPhongVe: (state, { type, payload }) => {
            state.danhSachPhongVe = payload;
        },
        gheDangChon: (state, { type, payload }) => {
            const ghe = payload;
            // nếu ghế đã được đặt thì return
            if (ghe.daDat) return;
            const index = state.danhSachGheDangChon.findIndex(
                (itemSelect) => itemSelect.maGhe === ghe.maGhe
            );
            if (index !== -1) {
                state.danhSachGheDangChon = state.danhSachGheDangChon.filter(
                    (item) => item.maGhe !== payload.maGhe
                );
            }
            if (index === -1) {
                state.danhSachGheDangChon.push(ghe);
            }
        },
    },
});

export const { layDanhSachPhongVe, gheDangChon } = QuanLyDatVeSlice.actions;

export default QuanLyDatVeSlice.reducer;

// -------------------action thunk ------------------
// layDanhSachPhongVe
export const layDanhSachPhongVeAction = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyDatVeApi.layChiTietPhongVe(requestData);
            console.log("layDanhSachPhongVe", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(layDanhSachPhongVe(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

// datVe
export const datVeAction = (requestData) => {
    return async (dispatch) => {
        try {
            console.log(requestData);
            const { data, status } = await quanLyDatVeApi.datVe(requestData);
            console.log("datVe", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            // dispatch(layDanhSachPhongVe(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};
