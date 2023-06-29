import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedKeys: "",
    openKeys: "",
};

const MenuAdminSlice = createSlice({
    name: "MenuAdminSlice",
    initialState,
    reducers: {
        setKeyREDU: (state, { type, payload }) => {
            state.selectedKeys = payload.selectedKeys;
            state.openKeys = payload.openKeys;
        },
    },
});

export const { setKeyREDU } = MenuAdminSlice.actions;

export default MenuAdminSlice.reducer;
