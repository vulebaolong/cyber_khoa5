import { combineReducers } from "redux";
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";
import { QuanLyRapReducer } from "./QuanLyRapReducer";
import { QuanLyNguoiDungReducer } from "./QuanLyNguoiDungReducer";
export const rootReducer = combineReducers({
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
});
