import React, { useEffect, useState } from "react";
import QuestButton from "../common/button";
import QuestTextBox from "../common/textbox";
import { toast } from "react-toastify";
import RichText from "../common/richText";
const AnswerForm = (props) => {
  //props
  const {
    clearSucess,
    formErrors,
    onCancelClick,
    formSuccess,
    resetError,
    item,
    AnswerForm,
    id,
    questionId,
  } = props;
  //state
  const [input, setInput] = useState({ anonymousFlag: false, answer: "" });
  const [pendingUI, setpendingUI] = useState(false);
  //input change handler
  const onChangehandler = (data) => {
    let id = data.id.split("_")[1];
    setInput((prev) => ({ ...prev, [id]: data.value }));
    if (id === "answer" && data.value.length > 20) resetError(id);
  };
  //submit
  const onSubmit = () => {
    //postAnswer/ updateAnswer based on id
    let formtype = id.split("-")[1];
    props[formtype]({
      ...input,
      answerId: item?.answerId,
      questionId,
    });

    setpendingUI(true);
  };

  //clearing success on formError or answerCreated
  useEffect(() => {
    if (formErrors || formSuccess) {
      const timer = setTimeout(() => {
        clearSucess();
        setpendingUI(false);
        return () => clearTimeout(timer);
      }, 1000);
    }
    if (formErrors?.postError)
      toast.error(
        <em className="error-red">{formErrors?.postError.message}</em>,
        { toastId: formErrors?.postError.id }
      );

    if (formSuccess)
      toast.success(<em className="suceess-green">{formSuccess.message}</em>, {
        toastId: formSuccess.id,
      });
  }, [formErrors, formSuccess, clearSucess]);

  useEffect(() => {
    if (formSuccess) {
      setInput({ answer: "", anonymousFlag: false });
    }
    if (formSuccess && item) {
      const timer = setTimeout(() => {
        onCancelClick();
        return () => clearTimeout(timer);
      }, [1000]);
    }
    if (item) {
      setInput({
        answer: item?.answerDescription,
        anonymousFlag: item?.anonymousFlag,
      });
    }
  }, [formSuccess, item, onCancelClick]);

  return (
    <div id={id} className="questionDetail-postAnswer w-100">
      <RichText
        placeholder="Type Your Answer..."
        value={input.answer}
        onChange={onChangehandler}
        id="postAnswer_answer"
        error={formErrors?.answerDescription}
      />
      <div className="formQuestion-flag">
        <label htmlFor="postAnswer_anonymousFlag" title="Post as Anonymous">
          <QuestTextBox
            type="checkbox"
            id="postAnswer_anonymousFlag"
            name="postAnswer_anonymousFlag"
            checked={input.anonymousFlag}
            onChange={onChangehandler}
            title="Post as Anonymous"
          />
          Post as Anonymous
        </label>
        <br />
      </div>

      <div className="postAnswer-button">
        <QuestButton
          disabled={formErrors}
          value={
            pendingUI
              ? AnswerForm.questionButton.pendingvalue
              : AnswerForm.questionButton.value
          }
          theme={AnswerForm?.questionButton?.theme}
          onClick={onSubmit}
        />
        {AnswerForm?.cancel ? (
          <QuestButton
            disabled={formErrors}
            value="Cancel"
            theme={AnswerForm?.cancel?.theme}
            onClick={onCancelClick}
          />
        ) : null}
      </div>
    </div>
  );
};

export default AnswerForm;
