import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  tag: {},
};
const tagSlice = createSlice({
  name: "Tags",
  initialState,
  reducers: {
    getTags: (state, action) => {
      state.tags = action.payload;
    },
    getTagInfo: (state, action) => {
      state.tag = action.payload;
    },
    //post tag
    addTag: (state, action) => {
      state.tags.push({ ...action.payload, tagId: state.tags.length });
    },
    update_Tag: (state, action) => {
      let index = state.tags.findIndex(
        (item) => item.tagId === action.payload.tagId
      );
      state.answers[index] = action.payload;
    },

    deleteTag: (state, action) => {
      let index = state.tags.findIndex(
        (item) => item.tagId === parseInt(action.payload)
      );

      if (index > -1) state.tags.splice(index, 1);
    },
  },
});

export default tagSlice.reducer;
export const { getTags, addTag, deleteTag, getTagInfo } = tagSlice.actions;
