import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionCreated: undefined,
  formErrors: "",
  formSucess: "",
  question: {},
};
const questionSlice = createSlice({
  name: "Questions",
  initialState,
  reducers: {
    //remove Question
    removeQuestion: (state, action) => {
      state.questionCreated = undefined;
      state.formErrors = "";
      state.formSucess = "";
      state.question = {};
    },
    //get Question
    getQuestion: (state, action) => {
      state.question = action.payload;
    },
    //add Question
    questionCreated: (state, action) => {
      state.questionCreated = action.payload;
    },
    //add Comment
    addComments: (state, action) => {
      if (state.question.comments) {
        state.question.comments.push(action.payload);
      } else {
        state.question["comments"] = [action.payload];
      }
    },
    deleteComment: (state, action) => {
      const index = state.question.comments.findIndex(
        (item) => item.commentId === parseInt(action.payload)
      );

      if (index > -1) state.question.comments.splice(index, 1);
    },
    updateComment: (state, action) => {
      const index = state.question.comments.findIndex(
        (item) => item.commentId === action.payload.commentId
      );
      if (index !== -1) {
        state.question.comments[index] = action.payload;
      }
    },

    //create a form error message
    addError: (state, action) => {
      state.formErrors = action.payload;
    },

    //create a success message
    success: (state, action) => {
      state.formSucess = action.payload;
    },

    //clear individual form field error on input chnage
    clearErrorOnChangeError: (state, action) => {
      if (state.formErrors && state.formErrors[action.payload]?.length > 0)
        state.formErrors = {
          ...state.formErrors,
          [action.payload]: "",
          postError: "",
        };
    },

    //clear all errors
    clearError: (state, action) => {
      state.formErrors = "";
    },
  },
});

export default questionSlice.reducer;
export const {
  questionCreated,
  addError,
  clearError,
  clearErrorOnChangeError,
  success,
  getQuestion,
  addComments,
  deleteComment,
  removeQuestion,
  updateComment,
} = questionSlice.actions;
