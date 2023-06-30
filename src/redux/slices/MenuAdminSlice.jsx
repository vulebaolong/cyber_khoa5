import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedKeys: "",
};

const MenuAdminSlice = createSlice({
    name: "MenuAdminSlice",
    initialState,
    reducers: {
        setKeyREDU: (state, { type, payload }) => {
            state.selectedKeys = payload.selectedKeys;
        },
    },
});

export const { setKeyREDU } = MenuAdminSlice.actions;

export default MenuAdminSlice.reducer;
