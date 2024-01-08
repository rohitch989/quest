import Header from "../components/common/header";
// import QuestionForm from "../components/QuestionForm";
import Form from "../components/common/Form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuestModal from "../components/common/questModal";
import Chips from "../components/common/chips";
// import Chips from '../components/chips';

const PostQuestion = (props) => {
  const { questionIndex } = props;
  const [showFields, setShowFields] = useState(0);
  const [input, setInput] = useState({
    anonymousFlag: false,
    title: "",
    questionDescription: "",
    codeSnippet: "",
  });

  //hooks
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  const onSubmit = (data) => props.createQuestion(data);

  //instance funtions
  const onChangeHandler = (data) => {
    setInput((prev) => ({ ...prev, [data.id.split("_")[1]]: data.value }));
    if (typeof data.id === "string")
      props.resetError({ id: data.id.split("_")[1], value: data.value });
  };

  //SuggestInput Change handler
  const tagChange = (tag) => {
    setTags(tag);
    if (tag.length === 0 && showFields >= 4) setShowFields(3);
  };

  useEffect(() => {
    if (questionIndex) {
      setInput({
        anonymousFlag: false,
        title: "",
        questionDescription: "",
        codeSnippet: "",
      });
      setTags([]);
      setShowFields(0);
      const timer = setTimeout(() => {
        navigate("/questions/" + questionIndex);
        return () => clearTimeout(timer);
      }, 2000);
    }
  }, [setInput, navigate, questionIndex]);

  return (
    <>
      <Header {...props} Yoffset={37} />

      <div className="section-container post-form-container ">
        <Form
          {...props}
          fieldCounter={0}
          onSubmit={onSubmit}
          showFields={showFields}
          input={input}
          tags={tags}
          setShowFields={setShowFields}
          onChangehandler={onChangeHandler}
          tagChange={tagChange}
        />
      </div>
      <QuestModal
        open={questionIndex ? true : false}
        title={<em className="suceess-green">{props.formSuccess.message}</em>}
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

export default PostQuestion;
