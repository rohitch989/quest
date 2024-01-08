import {
  addComments,
  updateComment,
  deleteComment,
} from "../store/slices/QuestionSlice";
import {
  addAnswer_comment,
  deleteComment as delete_Comment,
  updateComments as update_Comments,
} from "../store/slices/AnswerSlice";

import { addError, addSucess, clearError } from "../store/slices/FormSlice";
import { sendRequest } from "../mock/customHook";

//addcomments
export const postcomment = (data) => async (dispatch) => {
  const { comment, anonymousFlag, commentType, questionId } = data;
  const errors = {
    [`comment-${commentType}`]:
      comment?.length > 5
        ? null
        : { formError: "Your Comment should be more than 5 character?" },
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  if (hasErrors)
    return await dispatch(
      addError({
        comment: errors,
      })
    );
  const newComment = {
    userId: 1243,
    userName: "testName",
    anonymousFlag: anonymousFlag,
    commentDescription: comment,
  };

  let res;

  if (commentType.split("-")[0] === "question") {
    res = await sendRequest({
      method: "post",
      url: `/question/${questionId}/comments`,
      body: newComment,
    });

    if (res.request.status === 200) {
      await dispatch(clearError());
      await dispatch(
        addComments({ ...newComment, commentId: res.data.commentId })
      );
      await dispatch(
        addSucess({
          comment: {
            [`comment-${commentType}`]: {
              message: "New Question Comment\n:Created",
              id: res.data.commentIdAnswer + comment,
            },
          },
        })
      );
    } else
      await dispatch(
        addError({
          comment: {
            [`comment-${commentType}`]: {
              message: res.message,
              id: commentType + res?.request?.name,
            },
          },
        })
      );
  } else {
    res = await sendRequest({
      method: "post",
      url: `/questions/${questionId}/answers/${
        commentType.split("-")[1]
      }/comments`,
      body: newComment,
    });
    if (res.request.status === 200) {
      await dispatch(clearError());

      await dispatch(
        addAnswer_comment({
          new_comment: { ...newComment, commentId: res.data.commentIdAnswer },
          commentType,
        })
      );
      await dispatch(
        addSucess({
          comment: {
            [`comment-${commentType}`]: {
              message: "New Answer Comment \n:Created",
              id: res.data.commentIdAnswer + comment,
            },
          },
        })
      );
    } else
      await dispatch(
        addError({
          comment: {
            [`comment-${commentType}`]: {
              message: res.message,
              id: commentType + res.status,
            },
          },
        })
      );
  }
};

export const updatecomment = (data) => async (dispatch) => {
  const { comment, anonymousFlag, commentId, commentType, questionId } = data;

  const errors = {
    [`comment-${commentType}`]:
      comment.length > 5
        ? null
        : { formError: "Your Comment should be more than 5 character?" },
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  if (hasErrors)
    return await dispatch(
      addError({
        comment: errors,
      })
    );

  const newComment = {
    userId: 1243,
    userName: "testName",
    anonymousFlag: anonymousFlag,
    commentDescription: comment,
  };
  await dispatch(clearError());
  let res;

  if (commentType.split("-")[0] === "question") {
    res = await sendRequest({
      method: "put",
      url: `/question/${questionId}/comments/${commentId}`,
      body: newComment,
    });
    if (res?.request?.status === 200) {
      await dispatch(updateComment({ ...newComment, commentId }));
      await dispatch(
        addSucess({
          comment: {
            [`comment-${commentType}`]: {
              message: "Your Question Comment \n :Updated",
              id: commentType + commentId,
            },
          },
        })
      );
    } else
      await dispatch(
        addError({
          comment: {
            [`comment-${commentType}`]: {
              message: res.message,
              id: commentType + res.status,
            },
          },
        })
      );
  } else {
    res = await sendRequest({
      method: "put",
      url: `/question/${questionId}/answers/${
        commentType.split("-")[1]
      }/comments/${commentId}`,
      body: newComment,
    });
    if (res?.request?.status === 200) {
      await dispatch(
        update_Comments({
          new_comment: { ...newComment, commentId },
          commentType,
        })
      );
      await dispatch(
        addSucess({
          comment: {
            [`comment-${commentType}`]: {
              message: "Your Answer Comment \n :Updated",
              id: commentType + commentId,
            },
          },
        })
      );
    } else
      await dispatch(
        addError({
          comment: {
            [`comment-${commentType}`]: {
              message: res.message,
              id: commentType + res.status,
            },
          },
        })
      );
  }
};

export const deletecomment = (data) => async (dispatch) => {
  const { commentType, commentId, questionId } = data;

  let res;
  if (commentType.split("-")[0] === "question") {
    res = await sendRequest({
      method: "delete",
      url: `/question/${questionId}/comments/${commentId}`,
    });
    if (res?.request?.status === 200) {
      await dispatch(deleteComment(res.data.commentId));
      await dispatch(
        addSucess({
          comment_delted: {
            message: "One Question Comment \n :Deleted",
            id: commentType + "=" + commentId,
          },
        })
      );
    } else
      await dispatch(
        addError({
          comment_delted: {
            [`comment-${commentType}`]: {
              message: res.message,
              id: commentType + res.status,
            },
          },
        })
      );
  } else {
    res = await sendRequest({
      method: "delete",
      url: `/question/${questionId}/commentsAnswer/${commentId}`,
    });
    if (res?.request?.status === 200) {
      await dispatch(delete_Comment({ commentType, commentId }));
      await dispatch(
        addSucess({
          comment_delted: {
            message: "One Answer Comment \n :Deleted",
            id: commentType + "=" + commentId,
          },
        })
      );
    } else
      await dispatch(
        addError({
          comment_delted: {
            [`comment-${commentType}`]: {
              message: res.message,
              id: commentType + res.status,
            },
          },
        })
      );
  }
};
