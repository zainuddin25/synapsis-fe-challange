import { UserTypes } from "@/types";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../action/user";

type StateType = {
  value: {
    data: UserTypes[];
    loading: boolean;
    error: string | null;
  };
};

const initialState: StateType = {
  value: {
    data: [],
    loading: false,
    error: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.data.unshift(action.payload);
    },
    updateUser: (state, action: PayloadAction<UserTypes>) => {
      const { name, email, gender, id, status } = action.payload;
      const index = state.value.data.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.value.data[index] = {
          ...state.value.data[index],
          name,
          email,
          gender,
          status,
        };
      }
    },
    deleteDataUser: (state, action: PayloadAction<number>) => {
      state.value.data = state.value.data.filter(
        (user) => user.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.value.loading = true;
      state.value.error = null;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<UserTypes[]>) => {
        state.value.loading = false;
        state.value.data = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.value.loading = false;
      state.value.error = action.error.message || "internal server error";
    });
  },
});

export const { addUser, updateUser, deleteDataUser } = userSlice.actions;
export default userSlice.reducer;
