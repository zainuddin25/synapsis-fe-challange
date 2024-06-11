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
    updateBlog: (
      state,
      action: PayloadAction<{ id: number; title: string; body: string }>
    ) => {
      const { id, title, body } = action.payload;
      const index = state.value.findIndex((blog) => blog.id === id);
      if (index !== -1) {
        state.value[index] = { ...state.value[index], title, body };
      }
    },
    deleteBlog: (state, action: PayloadAction<{ id: number }>) => {
      const blogNotDeleted = state.value.find(
        (blog) => blog.id != action.payload.id
      );

      console.log(blogNotDeleted);
    },
  },
});

export const { addBlog, updateBlog } = blogSlice.actions;
export default blogSlice.reducer;
