import { configureStore } from "@reduxjs/toolkit";
import SideBarReducer from "./sidebarSlice";
import FilterSortReducer from "./mobileSortFilter";
import SearchFocusReducer from "./searchFocusSlice";
import hoverActionsSlice from "./hoverActionsSlice";
import BasketSlice from "./basketProductsSlice";

import SortData from "./dataSortSlice";

export const store = configureStore({
  reducer: {
    sidebar: SideBarReducer,
    filterSort: FilterSortReducer,
    sortData: SortData,
    searchFocus: SearchFocusReducer,
    CartHoverAction: hoverActionsSlice,
    basket: BasketSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
