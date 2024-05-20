import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import petReducer from "./features/petSlice";
import sidebarReducer from "./features/sidebarSlice";

export const store = configureStore({
  reducer: {
    authUser: authReducer,
    pet: petReducer,
    sidebar: sidebarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
