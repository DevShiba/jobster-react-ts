import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeFromLocalStorage,
} from "../../utils/localStorage";
import { toast } from "react-toastify";
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from "./userThunk";

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

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/register", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thinkAPI) => {
    return updateUserThunk("/auth/update", user, thinkAPI);
  }
);

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

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        if (payload) {
          const { user } = payload;
          state.isLoading = false;
          state.user = user;
          addUserToLocalStorage(user);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        // Ensure payload exists and is a string before calling toast.error
        if (action.payload) {
          toast.error(action.payload.toString());
        } else if (action.error.message) {
          toast.error(action.error.message);
        }
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        if (payload) {
          const { user } = payload;
          state.isLoading = false;
          state.user = user;
          addUserToLocalStorage(user);
          toast.success("User Updated Successfully");
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        // Ensure payload exists and is a string before calling toast.error
        if (action.payload) {
          toast.error(action.payload.toString());
        } else if (action.error.message) {
          toast.error(action.error.message);
        }
      });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
