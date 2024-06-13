import { UserTypes } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.API_URL;

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get<UserTypes[]>(`${apiUrl}/users?per_page=100`);
  return response.data;
});
