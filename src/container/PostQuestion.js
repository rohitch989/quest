import React from "react";
import PostQuestion from "../pages/postQuestion";
import { createQuestion, clearSucess, resetError } from "../action/question";
import { connect } from "react-redux";
import { mockPostQuestion } from "../mock/mock_Form";
import { tags } from "../mock/Data";

const PostQuestionContainer = (props) => {
  return (
    <PostQuestion {...props} mockData={mockPostQuestion} available={tags} />
  );
};

const mapStateToProps = (state) => ({
  questions: state.Question.questions,
  formErrors: state.Question.formErrors,
  formSuccess: state.Question.formSucess,
  questionIndex: state.Question.questionCreated,
});

export default connect(mapStateToProps, {
  createQuestion,
  clearSucess,
  resetError,
})(PostQuestionContainer);
