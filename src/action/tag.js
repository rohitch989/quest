import { addTag, getTags, getTagInfo } from "../store/slices/TagSlice";
import { tags } from "../mock/Data";
import {
  addError,
  addSucess,
  clearError,
  clearErrorOnChangeError,
  clear_Sucess,
} from "../store/slices/FormSlice";

//get All tags
export const getAllTags = () => async (dispatch) => {
  try {
    await dispatch(getTags(tags));
  } catch (error) {
    await dispatch(
      addError({
        tag: { alltags: { message: error.message, id: error?.id } },
      })
    );
  }
};

export const get_TagInfo = (tagId) => async (dispatch) => {
  try {
    let tagInfo = tags.find((tag) => tag.tagName === tagId);
    await dispatch(getTagInfo(tagInfo));
  } catch (error) {
    addError({
      tag: { getTag: { message: error.message, id: error?.id } },
    });
  }
};

//post Tag
export const postTag = (data) => async (dispatch) => {
  const { tagName, tagInfo, tagDescription } = data;

  const errors = {
    tagName:
      tagName.trim().length > 0
        ? tagName.trim().length < 35
          ? null
          : "Tag Name should not be greater than 35"
        : "Tag Name should not be Empty",

    tagInfo:
      tagInfo.trim().length > 20 ? null : "Tag info should be greater then 20",
    tagDescription:
      tagDescription.trim().length > 20
        ? null
        : "tag Description info should be greater then 20",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  if (hasErrors) return await dispatch(addError({ tag: errors }));

  //create Tag
  const newTag = {
    tagName,
    tagInfo,
    tagDescription,
    createdBy: "testUser",
    modifiedBy: "testUser",
    createOn: new Date().toUTCString(),
    modifiedOn: new Date().toUTCString(),
  };

  await dispatch(clearError());
  try {
    await dispatch(addTag(newTag));
    await dispatch(
      addSucess({ tag: { message: "New Tag\n:Created", id: tagInfo } })
    );
  } catch (error) {
    await dispatch(
      addError({
        tag: { postError: { message: error.message, id: error?.id } },
      })
    );
  }
};

//clear success message
export const clearSucess = () => async (dispatch) => {
  await dispatch(clear_Sucess());
};

//clear invididual error on input change
export const resetError =
  ({ id, value }) =>
  async (dispatch) => {
    switch (id) {
      case "tagName":
        if (value.length > 0)
          await dispatch(clearErrorOnChangeError("tag_" + id));
        break;

      default:
        if (value.length > 20)
          await dispatch(clearErrorOnChangeError("tag_" + id));
        break;
    }
  };
