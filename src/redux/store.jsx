// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import { rootReducer } from "./reducers/rootReducer";
// import { composeWithDevTools } from "@redux-devtools/extension";

// // Kết hợp middleware Saga và Redux DevTools
// const middleware = [thunk];

// // Tạo store
// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

import { configureStore } from "@reduxjs/toolkit";
import QuanLyPhimSlice from "./slices/QuanLyPhimSlice";
import QuanLyRapSlice from "./slices/QuanLyRapSlice";
import QuanLyDatVeSlice from "./slices/QuanLyDatVeSlice";
import QuanLyNguoiDungSlice from "./slices/QuanLyNguoiDungSlice";
export const store = configureStore({
    reducer: { QuanLyPhimSlice, QuanLyRapSlice, QuanLyDatVeSlice, QuanLyNguoiDungSlice },
});
