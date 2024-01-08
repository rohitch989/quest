import React, { useEffect, useState } from "react";
import Header from "../../components/common/header";
import Form from "../../components/common/Form";

const TagForm = (props) => {
  const { formSuccess } = props;

  const [input, setInput] = useState({
    tagName: "",
    tagInfo: "",
    tagDescription: "",
    tagAbout: "",
  });
  const onChangeHandler = (data) => {
    setInput((prev) => ({ ...prev, [data.id.split("_")[1]]: data.value }));
    props.resetError({ id: data.id.split("_")[1], value: data.value });
  };
  const onSubmit = (data) => props.postTag(data);

  useEffect(() => {
    if (formSuccess) {
      const timer = setTimeout(() => {
        setInput({
          tagName: "",
          tagInfo: "",
          tagDescription: "",
          tagAbout: "",
        });
        return () => clearTimeout(timer);
      }, 2000);

      // const timer = setTimeout(() => {
      //   navigate("/tags/" + tagId);
      //   return () => clearTimeout(timer);
      // }, 2000);
    }
  }, [setInput, formSuccess]);

  return (
    <>
      <Header {...props} Yoffset={37} />
      <div className="section-container post-form-container">
        <Form
          {...props}
          onChangehandler={onChangeHandler}
          input={input}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};

export default TagForm;
