import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserFromLocalStorage,
  removeFromLocalStorage,
} from "../../utils/localStorage";
import { toast } from "react-toastify";

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
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
