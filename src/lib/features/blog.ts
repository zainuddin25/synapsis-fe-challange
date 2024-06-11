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
    updateBlog: (state, action) => {
      const detail = state.value.find((item) => item.id == action.payload.id);
    },
  },
});

export const { addBlog, updateBlog } = blogSlice.actions;
export default blogSlice.reducer;
