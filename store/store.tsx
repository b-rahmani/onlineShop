import { configureStore } from "@reduxjs/toolkit";
import SideBarReducer from "./sidebarSlice";
import FilterSortReducer from "./mobileSortFilter";
import SortData from "./dataSortSlice";
export const store = configureStore({
  reducer: {
    sidebar: SideBarReducer,
    filterSort: FilterSortReducer,
    sortData: SortData,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
