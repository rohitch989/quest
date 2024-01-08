import { sendRequest } from "../mock/customHook";
import {
  addAnswer,
  update_Answer,
  deleteAnswer,
} from "../store/slices/AnswerSlice";
import {
  addError,
  addSucess,
  clearError,
  clear_Sucess,
  clearErrorOnChangeError,
} from "../store/slices/FormSlice";

//add Answers
export const postAnswer = (data) => async (dispatch) => {
  const { answer, anonymousFlag, questionId } = data;

  const errors = {
    answerDescription:
      answer.trim().length > 20
        ? null
        : "Answer should be greater than 20 characters?",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  if (hasErrors) return await dispatch(addError({ answer: errors }));

  //create Answer
  const newAnswer = {
    answerDescription: answer,
    codeSnippet: "",
    userId: 123,
    userName: "testName",
    anonymousFlag: anonymousFlag,
  };

  const res = await sendRequest({
    method: "post",
    url: `/question/${questionId}/answers`,
    body: newAnswer,
  });

  if (res.request.status === 200) {
    await dispatch(clearError());
    await dispatch(addAnswer({ ...newAnswer, answerId: res.data.answerId }));
    await dispatch(
      addSucess({
        answer: {
          message: "New Answer\n:Created",
          id: questionId + "-answer",
        },
      })
    );
  } else
    await dispatch(
      addError({
        answer: { postError: { message: res.message, id: res.request.name } },
      })
    );
};

//update Answer
export const updateAnswer = (data) => async (dispatch) => {
  const { answer, anonymousFlag, answerId, questionId } = data;

  const errors = {
    answerDescription:
      answer.trim().length > 20
        ? null
        : "Answer should be greater than 20 characters?",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  if (hasErrors) return await dispatch(addError({ answer: errors }));

  const Answer = {
    answerDescription: answer,
    codeSnippet: "",
    userId: 123,
    userName: "testName",
    anonymousFlag: anonymousFlag,
  };

  const res = await sendRequest({
    method: "put",
    url: `/question/${questionId}/answers/${answerId}`,
    body: Answer,
  });

  if (res?.request?.status === 200) {
    await dispatch(clearError());
    await dispatch(
      addSucess({
        answerUpdated: {
          message: "One Answer \n:Updated",
          id: answerId + "_",
        },
      })
    );
    await dispatch(update_Answer({ ...Answer, answerId }));
  } else
    await dispatch(
      addError({
        answer: { postError: { message: res.message, id: answerId + "post" } },
      })
    );
};

export const deleteanswer = (data) => async (dispatch) => {
  const { answerId, questionId } = data;

  const res = await sendRequest({
    method: "delete",
    url: `/question/${questionId}/answers/${answerId}`,
  });

  if (res?.request?.status === 200) {
    await dispatch(clearError());
    await dispatch(deleteAnswer(answerId));
    await dispatch(
      addSucess({
        answerDeleted: { message: "One Answer \n:Deleted", id: answerId },
      })
    );
  } else
    await dispatch(
      addError({
        [`answerDeleted-${questionId}-${answerId}`]: {
          message: res.message,
          id: `answerDeleted-${questionId}-${answerId}`,
        },
      })
    );
};

//clear success message
export const clearSucess = () => async (dispatch) => {
  await dispatch(clear_Sucess());
};

//clear invididual error on input change
export const resetError = (id) => async (dispatch) => {
  let item = id.split("-");
  if (item[0] === "answer")
    await dispatch(clearErrorOnChangeError("answer_answerDescription"));
  else await dispatch(clearErrorOnChangeError(id.split("-")[0] + "_" + id));
};
