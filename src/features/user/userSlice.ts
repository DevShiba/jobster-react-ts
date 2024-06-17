import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localStorage";

interface UserState {
  isLoading: boolean;
  isSidebarOpen: boolean;
  user: any;
}

const initialState: UserState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = userSlice.actions;
export default userSlice.reducer;
