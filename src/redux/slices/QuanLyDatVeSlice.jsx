import { createSlice } from "@reduxjs/toolkit";
import { quanLyDatVeApi } from "./../../Api/QuanLyDatVeApi";
import { STATE_CODE } from "../../Api/BaseApi";

const initialState = {
    danhSachPhongVe: {},
    danhSachGheDangChon: [],
    danhSachGheNguoiKhacChon: [{ maGhe: 69962 }, { maGhe: 69963 }],
    thanhToan: "0",
    isDatVe: false,
    isModalOpen: false,
};

const QuanLyDatVeSlice = createSlice({
    name: "QuanLyDatVeSlice",
    initialState,
    reducers: {
        layDanhSachPhongVeREDU: (state, { type, payload }) => {
            state.danhSachPhongVe = payload;
        },
        gheDangChonREDU: (state, { type, payload }) => {
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
        selectedThanhToanREDU: (state, { type, payload }) => {
            state.thanhToan = payload;
        },
        showHideModalDatVeREDU: (state, { type, payload }) => {
            if (payload === "show" && state.isDatVe) {
                state.isModalOpen = true;
                return;
            }
            if (payload === "hide") {
                state.isModalOpen = false;
                return;
            }
        },
        setDatVeREDU: (state, { type, payload }) => {
            state.isDatVe = payload;
        },
    },
});

export const {
    layDanhSachPhongVeREDU,
    gheDangChonREDU,
    selectedThanhToanREDU,
    showHideModalDatVeREDU,
    setDatVeREDU,
} = QuanLyDatVeSlice.actions;

export default QuanLyDatVeSlice.reducer;

// -------------------action thunk ------------------

// layDanhSachPhongVeMID
export const layDanhSachPhongVeMID = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyDatVeApi.layChiTietPhongVe(requestData);
            console.log("layDanhSachPhongVeMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            dispatch(layDanhSachPhongVeREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

// datVeMID
export const datVeMID = (requestData) => {
    return async (dispatch) => {
        try {
            console.log(requestData);
            const { data, status } = await quanLyDatVeApi.datVe(requestData);
            console.log("datVeMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: ${status}`);

            await dispatch(layDanhSachPhongVeMID(requestData.maLichChieu));
            await dispatch(setDatVeREDU(true));
            dispatch(showHideModalDatVeREDU("show"));
        } catch (error) {
            console.log(error);
        }
    };
};
