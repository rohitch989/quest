import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_Question, deleteQuestion } from "../action/question";
import { postcomment, updatecomment, deletecomment } from "../action/comment";
import {
  postAnswer,
  resetError,
  clearSucess,
  updateAnswer,
  deleteanswer,
} from "../action/answer";
import { cardAside, questionDetail_mock } from "../mock/questionDetails";
import QuestionDetails from "../pages/questionDetails";
import { useNavigate } from "react-router-dom";

const QuestionDetailsContainer = (props) => {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const setprops = {
    questionId,
    cardAside,
    ...props,
    questionDetail_mock,
    navigate,
    askbutton: true,
  };
  return <QuestionDetails {...setprops} />;
};
const mapStatetoProps = (state) => ({
  question: state.Question?.question,
  answers: state.Answer.answers,
  comments: state.Question.question?.comments,
  formErrors: state.Form.formError,
  formSuccess: state.Form.formSucess,
});
export default connect(mapStatetoProps, {
  get_Question,
  postAnswer,
  clearSucess,
  resetError,
  updateAnswer,
  updatecomment,
  postcomment,
  deletecomment,
  deleteQuestion,
  deleteanswer,
})(QuestionDetailsContainer);
