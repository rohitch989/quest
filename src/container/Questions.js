import React from "react";
import { useSelector } from "react-redux";
import Question from "../pages/question";

const QuestionsContainer = (props) => {
  const { questions } = useSelector((state) => state.Question);
  const setprops = { questions, ...props };
  return <Question {...setprops} />;
};

export default QuestionsContainer;
