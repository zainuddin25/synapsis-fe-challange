import { BlogTypes } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
  value: BlogTypes[];
};

const initialState: StateType = {
  value: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<BlogTypes>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addBlog } = blogSlice.actions;
export default blogSlice.reducer;
