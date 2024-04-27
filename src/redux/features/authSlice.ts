import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../types";

const initialState: AuthState = {
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Adjust the Payload type accordingly when more features are added in the future
        addAuthUser: (state, action: PayloadAction<string>) => {
            state.user = action.payload;
        },
        removeAuthUser: (state) => {
            state.user = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addAuthUser, removeAuthUser } = authSlice.actions;

export default authSlice.reducer;
