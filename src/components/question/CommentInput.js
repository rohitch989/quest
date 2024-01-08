import React, { useEffect, useState } from "react";
import QuestButton from "../common/button";
import QuestTextBox from "../common/textbox";
import { toast } from "react-toastify";
const CommentInput = (props) => {
  const {
    formErrors,
    clearSucess,
    resetError,
    item,
    formtype,
    questionId,
    cancel,
  } = props;
  const [input, setInput] = useState({
    comment: item ? item.commentDescription : "",
  });
  const [pendingUI, setpendingUI] = useState(false);

  const formSuccess = props.formSuccess?.[`comment-${props?.id}`];
  const onChagehandler = (data) => {
    const id = data.id.split("_")[1];
    setInput((prev) => ({ ...prev, [id]: data.value }));
    if (id === "comment" && data.value.length > 5)
      resetError(`comment-${props?.id}`);
  };

  const onSubmit = () => {
    // postcomment/ updatecomment based on id
    props[formtype]({
      ...input,
      commentType: props.id,
      commentId: formtype === "updatecomment" ? item.commentId : 0,
      questionId,
    });
    setpendingUI(true);
  };

  //clearing success on formError or answerCreated
  useEffect(() => {
    if (formErrors || formSuccess) {
      if (formErrors?.[`comment-${props.id}`]?.message)
        toast.error(
          <em className="error-red">
            {formErrors[`comment-${props.id}`]?.message}
          </em>,
          { toastId: formErrors[`comment-${props.id}`]?.id }
        );
      const timer = setTimeout(() => {
        clearSucess();
        setpendingUI(false);
        return () => clearTimeout(timer);
      }, 1000);
    }
  }, [formErrors, clearSucess, props.id, formSuccess]);

  useEffect(() => {
    if (formSuccess) {
      toast.success(<em className="suceess-green">{formSuccess.message}</em>, {
        toastId: formSuccess.id,
      });
      setInput({ comment: "" });
    }
    if (formSuccess && item && cancel) {
      const timer = setTimeout(() => {
        cancel();
        return () => clearTimeout(timer);
      }, 1000);
    }
  }, [formSuccess, cancel, item]);

  return (
    <>
      <QuestTextBox
        id={props.id + "_comment"}
        placeHolder="Add a comment"
        value={input.comment}
        onChange={onChagehandler}
        name={props.id + "_comment"}
        error={
          formErrors ? formErrors[`comment-${props.id}`]?.["formError"] : null
        }
      />

      <div className="form-button">
        {formtype === "postcomment" ? (
          <QuestButton
            id={props.id + "_commentSubmit"}
            value={
              pendingUI
                ? "Posting..."
                : `comment on this ${props.id.split("-")[0]}`
            }
            theme="green"
            onClick={onSubmit}
            disabled={formErrors?.[`comment-${props.id}`]}
          />
        ) : (
          <QuestButton
            id={props.id + "_commentSubmit"}
            value={pendingUI ? "Updating..." : "Update Comment"}
            theme="secondary"
            onClick={onSubmit}
            disabled={formErrors?.[`comment-${props.id}`]}
          />
        )}
        {props.cancel && (
          <QuestButton
            id={props.id + "_commentCancel"}
            value="cancel"
            theme="primary"
            onClick={() => {
              props.cancel();
            }}
            disabled={formErrors?.[`comment-${props.id}`]}
          />
        )}
      </div>
    </>
  );
};

export default CommentInput;
