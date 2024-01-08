import React from "react";
// import { useParams } from "react-router-dom";
import {
  get_Question,
  clearSucess,
  resetError,
  update_Question,
} from "../action/question";
import EditQuestion from "../pages/editQuestion";
import { connect } from "react-redux";
import { mock_EditQuestion } from "../mock/mock_Form";
import { tags } from "../mock/Data";
import { useParams } from "react-router-dom";

const EditContainer = (props) => {
  const { questionId } = useParams();
  return (
    <EditQuestion
      {...props}
      mockData={mock_EditQuestion}
      questionId={questionId}
      available={tags}
    />
  );
};

const mapStateToProps = (state) => ({
  question: state.Question.question,
  formErrors: state.Question.formErrors,
  formSuccess: state.Question.formSucess,
  questionIndex: state.Question.questionCreated,
});

export default connect(mapStateToProps, {
  get_Question,
  clearSucess,
  resetError,
  update_Question,
})(EditContainer);
