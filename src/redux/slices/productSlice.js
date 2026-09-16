import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  statusLabels: {},
  total: 0,

  isLoading: false,
  isSubmitting: false,

  error: null,
  submitError: null,
};

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    fetchStarted(state) {
      state.isLoading = true;
      state.error = null;
      state.products = [];
    },

    fetchSucceeded(state, action) {
      state.isLoading = false;
      state.products = action.payload?.products ?? [];
      state.statusLabels = action.payload?.productStatus ?? {};
      state.total = action.payload?.count ?? 0;
    },

    fetchFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    createStarted(state) {
      state.isSubmitting = true;
      state.submitError = null;
    },

    createSucceeded(state, action) {
      state.isSubmitting = false;

      if (action.payload) {
        state.products.unshift(action.payload);
      }
    },

    createFailed(state, action) {
      state.isSubmitting = false;
      state.submitError = action.payload;
    },

    clearError(state) {
      state.error = null;
    },

    clearSubmitError(state) {
      state.submitError = null;
    },
  },
});

export const {
  fetchStarted,
  fetchSucceeded,
  fetchFailed,

  createStarted,
  createSucceeded,
  createFailed,

  clearError,
  clearSubmitError,
} = productSlice.actions;

export default productSlice.reducer;
