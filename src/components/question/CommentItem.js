import React, { useEffect, useState } from "react";
import Author from "./Author";
import CommentInput from "./CommentInput";
import { toast } from "react-toastify";
const CommentItem = (props) => {
  //props
  const { comment, type, item, Success, questionId, formErrors, clearSucess } =
    props;
  //state
  const [editForm, setEditForm] = useState(false);
  const [Pend, setPend] = useState(false);
  //constant
  const comment_delted_error =
    formErrors?.comment_delted?.[`comment-${type}-${item[`${type}Id`]}`];

  //instance function
  const onEditHandler = () => {
    if (props.isOpen === false) {
      setEditForm(true);
      props.setIsOpen(true);
    }
  };

  const onCancelClick = () => {
    setEditForm(false);
    props.setIsOpen(false);
  };
  const onDeleteClick = (e) => {
    props.deletecomment({
      commentId: comment.commentId,
      commentType: type + "-" + item[`${type}Id`],
      questionId,
    });
    setPend(true);
  };

  useEffect(() => {
    if (Success) {
      toast.dark(<em className="suceess-green">{Success.message}</em>, {
        toastId: Success.id,
      });

      setPend("");
      clearSucess();
    }
    if (comment_delted_error) {
      toast.error(
        <em className="error-red">{comment_delted_error.message}</em>,
        { toastId: comment_delted_error.id }
      );
      setPend("");
    }
  }, [Success, comment_delted_error, clearSucess]);

  return editForm ? (
    <div className="reply-input">
      <CommentInput
        id={type + "-" + item[`${type}Id`]}
        {...props}
        formErrors={props.formErrors?.comment}
        item={comment}
        formtype="updatecomment"
        formSuccess={props.formSuccess?.comment}
        cancel={onCancelClick}
      />
    </div>
  ) : (
    <div className="comment-section " style={{ opacity: Pend ? "0.25" : 1 }}>
      <div className="comment">
        <p>{comment.commentDescription}</p>

        <Author
          {...props}
          item={comment}
          delete="delete comment"
          type="comment"
          id={comment.commentId}
          edit="edit comment"
          onEditClick={onEditHandler}
          onDelete={onDeleteClick}
        />
      </div>
    </div>
  );
};

export default CommentItem;
