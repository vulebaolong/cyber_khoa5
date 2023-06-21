import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

// Kết hợp middleware Saga và Redux DevTools
const middleware = [thunk];

// Tạo store
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
