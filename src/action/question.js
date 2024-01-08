import {
  addError,
  clearError,
  clearErrorOnChangeError,
  getQuestion,
  success,
  questionCreated,
  removeQuestion,
} from "../store/slices/QuestionSlice";
import { getAnswers } from "../store/slices/AnswerSlice";
import { addError as add_Error, addSucess } from "../store/slices/FormSlice";
//API
import { sendRequest } from "../mock/customHook";
// import { questions } from "../mock/Data";

//get individual question
export const get_Question = (id) => async (dispatch) => {
  const res = await sendRequest({ url: "/questions/" + id, method: "get" });
  if (res?.request?.status === 200) {
    await dispatch(questionCreated(undefined));
    await dispatch(
      getQuestion({
        ...res.data.questions,
        comments: res.data?.comments,
      })
    );
    return await dispatch(getAnswers(res.data.answers));
  }
  //dispatch error
  await dispatch(getQuestion("This Question does not exist"));
};

//add Question
export const createQuestion = (data) => async (dispatch) => {
  const { title, questionDescription, codeSnippet, tags, anonymousFlag } = data;
  const errors = {
    title: title.trim()?.length > 0 ? null : "Title is required?",
    questionDescription:
      questionDescription.trim().length > 20
        ? null
        : "Your Question Description should be more than 20 characters",
    codeSnippet:
      codeSnippet.trim()?.length > 20
        ? null
        : "Your Expectation should be more than 20 characters",
    tags: tags?.length > 0 ? null : "Please provide atleast 1 Tag",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  if (hasErrors)
    return await dispatch(
      addError({
        ...errors,
        postError: "Something went wrong! Please scroll Above",
      })
    );

  //create Question
  const newQuestion = {
    title,
    questionDescription,
    codeSnippet,
    anonymousFlag,
    questionStatus: "open",
    tags,
    userId: "1234",
  };

  const res = await sendRequest({
    method: "post",
    url: "/questions",
    body: newQuestion,
  });
  if (res?.request?.status === 200) {
    await dispatch(clearError());
    await dispatch(
      success({ message: "New Question\n:Created", id: res.data.questionId })
    );
    await dispatch(questionCreated(res.data.questionId));
  } else await dispatch(addError({ postError: res.message }));
};

// update question
export const update_Question = (data) => async (dispatch) => {
  const {
    title,
    questionDescription,
    codeSnippet,
    tags,
    questionId,
    anonymousFlag,
  } = data;

  const errors = {
    title: title.trim().length > 0 ? null : "Title is required?",
    questionDescription:
      questionDescription.trim()?.length >= 20
        ? null
        : "Your Question Description should be more than 20 characters",
    codeSnippet:
      codeSnippet.trim()?.length >= 20
        ? null
        : "Your Expectation should be more than 20 characters",
    tags: tags?.length > 0 ? null : "Please provide atleast 1 Tag",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  if (hasErrors)
    return await dispatch(
      addError({
        ...errors,
        postError: "Something went wrong! Please scroll Above",
      })
    );

  //update Question
  const Question = {
    title,
    questionDescription,
    codeSnippet,
    anonymousFlag,
    questionStatus: "open",
    tags,
    userId: "1234",
  };
  const res = await sendRequest({
    method: "put",
    url: "/questions/" + questionId,
    body: Question,
  });

  if (res?.request?.status === 200) {
    await dispatch(clearError());
    await dispatch(
      success({
        message: "Question\n:Updated",
        id: res.data.response.description + questionId,
      })
    );
    await dispatch(questionCreated(questionId));
  } else await dispatch(addError({ postError: res.message }));
};

export const deleteQuestion = (data) => async (dispatch) => {
  const questionId = data;

  const res = await sendRequest({
    method: "delete",
    url: `/questions/${questionId}`,
  });
  if (res?.request?.status === 200) {
    await dispatch(removeQuestion());
    await dispatch(
      addSucess({ questionDelete: res.data.response.description })
    );
  } else {
    await dispatch(add_Error({ questionDelete: res.message }));
  }
};
//clear success message
export const clearSucess = () => async (dispatch) => {
  await dispatch(success(""));
};

//clear invididual error on input change
export const resetError =
  ({ id, value }) =>
  async (dispatch) => {
    switch (id) {
      case "title":
        await dispatch(clearErrorOnChangeError(id));
        break;

      default:
        if (value.length > 20) await dispatch(clearErrorOnChangeError(id));
        break;
    }
  };
