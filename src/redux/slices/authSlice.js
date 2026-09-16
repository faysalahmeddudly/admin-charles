import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "../../lib/constants";
import { getStorageItem, removeStorageItem, setStorageItem } from "../../lib/storage";

const storedAuth = getStorageItem(STORAGE_KEYS.AUTH, { token: null, name: null, role: null, avatar: null });

const initialState = {
  token: storedAuth?.token ?? null,
  name: storedAuth?.name ?? null,
  role: storedAuth?.role ?? null,
  avatar: storedAuth?.avatar ?? null,

  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStarted(state) {
      state.isLoading = true;
      state.error = null;
    },

    loginSucceeded(state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.avatar = action.payload.avatar;

      setStorageItem(STORAGE_KEYS.AUTH, {
        token: state.token,
        name: state.name,
        role: state.role,
        avatar: state.avatar,
      });
    },

    loginFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    registerStarted(state) {
      state.isLoading = true;
      state.error = null;
    },

    registerSucceeded(state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.avatar = action.payload.avatar;

      setStorageItem(STORAGE_KEYS.AUTH, {
        token: state.token,
        name: state.name,
        role: state.role,
        avatar: state.avatar,
      });
    },

    registerFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    clearError(state) {
      state.error = null;
    },

    logout(state) {
      state.token = null;
      state.name = null;
      state.role = null;
      state.avatar = null;
      removeStorageItem(STORAGE_KEYS.AUTH);
    },
  },
});

export const {
  loginStarted,
  loginSucceeded,
  loginFailed,
  registerStarted,
  registerSucceeded,
  registerFailed,
  clearError,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
