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
  reducers: {},
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

export default userSlice.reducer;
