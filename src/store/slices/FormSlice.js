import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formError: {},
  formSucess: undefined,
};
const formSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    addError: (state, action) => {
      state.formError = { ...state.formError, ...action.payload };
    },
    addSucess: (state, action) => {
      state.formSucess = action.payload;
    },
    clearError: (state, action) => {
      state.formError = {};
    },
    clear_Sucess: (state, action) => {
      state.formSucess = "";
    },
    clearErrorOnChangeError: (state, action) => {
      let item = action.payload.split("_");
      if (state.formError?.[item[0]]) {
        state.formError[item[0]][item[1]] = "";
      }
    },
  },
});

export default formSlice.reducer;
export const {
  addError,
  addSucess,
  clearError,
  clear_Sucess,
  clearErrorOnChangeError,
} = formSlice.actions;
