import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: [],
};
const answerSlice = createSlice({
  name: "Answers",
  initialState,
  reducers: {
    getAnswers: (state, action) => {
      state.answers = action.payload;
    },
    //post answer
    addAnswer: (state, action) => {
      state.answers.push(action.payload);
    },
    update_Answer: (state, action) => {
      let index = state.answers.findIndex(
        (item) => item.answerId === action.payload.answerId
      );
      state.answers[index] = action.payload;
    },
    deleteAnswer: (state, action) => {
      let index = state.answers.findIndex(
        (item) => item.answerId === parseInt(action.payload)
      );

      if (index > -1) state.answers.splice(index, 1);
    },

    addAnswer_comment: (state, action) => {
      const { new_comment, commentType } = action.payload;
      let index = state.answers.findIndex(
        (item) => item.answerId === parseInt(commentType.split("-")[1])
      );

      if (state.answers[index].comments)
        state.answers[index].comments.push(new_comment);
      else state.answers[index]["comments"] = [new_comment];
    },

    updateComments: (state, action) => {
      const { new_comment, commentType } = action.payload;
      let index = state.answers.findIndex(
        (item) => item.answerId === parseInt(commentType.split("-")[1])
      );

      let found = state.answers[index].comments.findIndex(
        (item) => item.commentId === parseInt(new_comment.commentId)
      );

      if (found !== -1) state.answers[index].comments[found] = new_comment;
    },
    deleteComment: (state, action) => {
      const { commentId, commentType } = action.payload;
      let index = state.answers.findIndex(
        (item) => item.answerId === parseInt(commentType.split("-")[1])
      );

      let found = state.answers[index].comments.findIndex(
        (item) => item.commentId === parseInt(commentId)
      );

      if (found > -1) state.answers[index].comments.splice(found, 1);
    },
  },
});

export default answerSlice.reducer;
export const {
  answerCreated,
  getAnswers,
  addAnswer,
  update_Answer,
  addAnswer_comment,
  updateComments,
  deleteComment,
  deleteAnswer,
} = answerSlice.actions;
