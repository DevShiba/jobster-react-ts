import customFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (
  url: string,
  user: void,
  thunkAPI: { rejectWithValue: (value: unknown) => void }
) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data);
  }
};

export const loginUserThunk = async (
  url: string,
  user: void,
  thunkAPI: { rejectWithValue: (value: unknown) => void }
) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data);
  }
};

export const updateUserThunk = async (
  url: string,
  user: void,
  thunkAPI: { rejectWithValue: (value: unknown) => void }
) => {
  try {
    const resp = await customFetch.patch(url, user);
    return resp.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data);
  }
};
