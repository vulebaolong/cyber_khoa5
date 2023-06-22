import { combineReducers } from "redux";
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";
import { QuanLyRapReducer } from "./QuanLyRapReducer";
export const rootReducer = combineReducers({ QuanLyPhimReducer, QuanLyRapReducer });
