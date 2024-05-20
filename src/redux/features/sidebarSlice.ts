import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISidebarState } from "../../interfaces";
import { SidebarType } from "../../layouts/SidebarLayout/types";

const initialState: ISidebarState = {
    visible: true,
    type: SidebarType.DASHBOARD,
};

export const sidebarSlice = createSlice({
    name: "sidebarSlice",
    initialState,
    reducers: {
        // Adjust the Payload type accordingly when more features are added in the future
        toggleSidebar: (state) => {
            state.visible = !state.visible;
        },
        changeSidebar: (state, action: PayloadAction<SidebarType>) => {
            state.type = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar, changeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
