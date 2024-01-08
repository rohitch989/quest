import React, { useEffect, useState } from "react";
import Header from "../components/common/header";

import Form from "../components/common/Form";
import { useNavigate } from "react-router-dom";
import QuestModal from "../components/common/questModal";
import Chips from "../components/common/chips";

const EditQuestion = (props) => {
  //props
  const { questionId, get_Question, question, questionIndex } = props;

  const [input, setInput] = useState({
    anonymousFlag: "",
    title: "",
    questionDescription: "",
    codeSnippet: "",
  });

  //tags hook
  const [tags, setTags] = useState([]);

  //hooks
  const navigate = useNavigate();

  //instance funtions
  const onChangeHandler = (data) => {
    setInput((prev) => ({ ...prev, [data.id.split("_")[1]]: data.value }));
    if (typeof data.id === "string") {
      props.resetError({ id: data.id.split("_")[1], value: data.value });
    }
  };

  //SuggestInput Change handler
  const tagChange = (tag) => setTags(tag);

  //Submit
  const onSubmit = (data) => {
    props.update_Question({ ...data, questionId });
  };

  //get question details
  useEffect(() => {
    get_Question(questionId);
  }, [questionId, get_Question]);

  //reset
  useEffect(() => {
    if (questionIndex) {
      setInput({
        anonymousFlag: question.anonymousFlag,
        title: question.title,
        questionDescription: question.questionDescription,
        codeSnippet: question.codeSnippet,
      });
      setTags(question.tags);
      const timer = setTimeout(() => {
        navigate("/questions/" + questionIndex);

        return () => clearTimeout(timer);
      }, 3000);
    }
  }, [
    setInput,
    navigate,
    questionIndex,
    question.anonymousFlag,
    question.title,
    question.questionDescription,
    question.codeSnippet,
    question.tags,
  ]);

  //setting state values
  useEffect(() => {
    if (question) {
      setInput({
        anonymousFlag: question.anonymousFlag,
        title: question.title,
        questionDescription: question.questionDescription,
        codeSnippet: question.codeSnippet,
      });
      setTags(question.tags);
    }
  }, [question]);

  return (
    <>
      <Header {...props} Yoffset={37} />

      <div className="section-container post-form-container">
        <Form
          {...props}
          input={input}
          tags={tags}
          onChangehandler={onChangeHandler}
          tagChange={tagChange}
          onSubmit={onSubmit}
        />
        {/* <QuestionForm
          {...props}
          input={input}
          tags={tags}
          onChangehandler={onChangeHandler}
          tagChange={tagChange}
          onSubmit={onSubmit}
        /> */}
      </div>
      <QuestModal
        open={questionIndex ? true : false}
        title={<em className="suceess-green">{props.formSucess}</em>}
        body={
          <h4>
            Redirecting to
            <i className="bi bi-arrow-right"></i> &nbsp;
            <Chips
              value={<em>/question/{questionIndex}</em>}
              style_="lavender"
            />
            &nbsp; Page
          </h4>
        }
      />
    </>
  );
};

export default EditQuestion;
