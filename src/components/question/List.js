import React, { useEffect, useState } from "react";
import Chips from "../common/chips";
import Author from "./Author";
import AnswerForm from "./AnswerForm";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";
import QuestModal from "../common/questModal";
import QuestButton from "../common/button";
import { toast } from "react-toastify";

const List = (props) => {
  const {
    item,
    type,
    deleteanswer,
    isOpen,
    setIsOpen,
    questionDetail_mock,
    questionId,
    clearSucess,
    resetError,
    navigate,
  } = props;
  const [Pend, setPend] = useState(false);

  const [editForm, setEditForm] = useState(false);
  const [modal, setModal] = useState(false);
  const [editCommentForm, setEditCommentForm] = useState(false);

  const editCommentFormHandler = (data) => {
    setEditCommentForm(data);
  };
  const answerDeleted_Success = props.formSuccess?.answerDeleted;
  const question_Deleted_Success = props.formSuccess?.questionDelete;

  const answerDeleted_Error =
    props.formErrors?.[`answerDeleted-${questionId}-${item?.answerId}`];
  const onEditHandler = () => {
    if (isOpen === false) {
      setEditForm(true);
      setIsOpen(true);
    }
  };

  const onCancelClick = () => {
    setEditForm(false);
    setIsOpen(false);
  };
  const onDeleteClick = () => {
    if (!answerDeleted_Error) {
      if (type === "answer") {
        deleteanswer({ answerId: item.answerId, questionId });
        setPend(true);
      }
    }
    if (type === "question") setModal(true);
  };

  const delteQuestion = () => {
    props.deleteQuestion(questionId);
  };

  useEffect(() => {
    if (answerDeleted_Success || answerDeleted_Error) {
      const timer = setTimeout(() => {
        clearSucess();
        resetError();
        setPend("");
        return () => clearTimeout(timer);
      }, 500);
    }
    if (answerDeleted_Success)
      toast.dark(
        <em className="suceess-green">{answerDeleted_Success.message}</em>,
        { toastId: answerDeleted_Success.id }
      );

    //network error message
    if (answerDeleted_Error) {
      toast.error(
        <em className="error-red">
          {"Oops! -" + answerDeleted_Error.message}
        </em>,
        { toastId: answerDeleted_Error.id }
      );
    }
  }, [answerDeleted_Success, answerDeleted_Error, clearSucess, resetError]);

  useEffect(() => {
    if (question_Deleted_Success) {
      toast.dark(question_Deleted_Success);
      const timer = setTimeout(() => {
        clearSucess();
        navigate("/");
        return () => clearTimeout(timer);
      }, 2000);
    }
  }, [navigate, clearSucess, question_Deleted_Success]);

  return editForm ? (
    <div className="resultList">
      <AnswerForm
        {...props}
        id="questionDetail-updateAnswer"
        item={type === "answer" ? item : undefined}
        AnswerForm={questionDetail_mock.UpdateAnswer}
        onCancelClick={onCancelClick}
        formErrors={props.formErrors?.answer}
        formSuccess={props.formSuccess?.answerUpdated}
      />
    </div>
  ) : (
    <>
      <div className="resultList" style={{ opacity: Pend ? "0.25" : 1 }}>
        <div className="detail">
          <QuestButton
            theme="icons"
            value={<i className="bi bi-caret-up-fill"></i>}
          />
          <span>0</span>
          <QuestButton
            theme="icons"
            value={<i className="bi bi-caret-down-fill"></i>}
          />
        </div>
        <div className="content w-100">
          <div
            dangerouslySetInnerHTML={{
              __html: item[`${type}Description`],
            }}
          />
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: item.codeSnippet,
            }}
          />
          <br />
          <div>
            {item?.tags?.map((tag, index) => (
              <Chips
                value={tag?.tagName ? tag.tagName : "tagName"}
                key={index}
                style_="secondary"
              />
            ))}
          </div>

          <Author
            {...props}
            onEditClick={onEditHandler}
            share={"share-" + type}
            edit={"edit-" + type}
            notification={"notification-" + type}
            delete={"delete-" + type}
            onDelete={onDeleteClick}
            id={type === "answer" ? item.answerId : item.questionId}
          />

          {/* Comments */}
          {item.comments && item.comments.length > 0
            ? item.comments.map((comment, index) => (
                <CommentItem
                  comment={comment}
                  key={index}
                  {...props}
                  setIsOpen={editCommentFormHandler}
                  isOpen={editCommentForm}
                  Success={props.formSuccess?.comment_delted}
                />
              ))
            : null}
          {/* CommentInput Box */}
          {!editCommentForm && (
            <div className="reply-input">
              <CommentInput
                id={type + "-" + item[`${type}Id`]}
                {...props}
                formtype="postcomment"
                formErrors={props.formErrors?.comment}
                formSuccess={props.formSuccess?.comment}
                comments={props.item?.comments}
              />
            </div>
          )}
        </div>
      </div>
      {Pend ? <div className="comment-deleted">Deleting Answer</div> : null}
      <QuestModal
        open={modal}
        title={
          question_Deleted_Success ? (
            <em className="suceess-green"> {question_Deleted_Success}</em>
          ) : (
            "Are you Sure?"
          )
        }
        setModal={setModal}
        body={
          question_Deleted_Success ? (
            <h4>
              Redirecting to
              <i className="bi bi-arrow-right"></i> &nbsp;
              <Chips value={<em>Home</em>} style_="lavender" /> &nbsp;Page
            </h4>
          ) : (
            <h5>you want to delete</h5>
          )
        }
        onCancel={
          question_Deleted_Success
            ? undefined
            : () => {
                setModal(false);
              }
        }
        onConfirm={
          question_Deleted_Success
            ? undefined
            : () => {
                delteQuestion();
              }
        }
        cancelText="No,Please Don't"
        deleteText="yes, Delete this question"
      />
    </>
  );
};

export default List;
