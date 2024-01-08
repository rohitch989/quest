import React, { createElement, useEffect, useState } from "react";
import { toast } from "react-toastify";
import QuestButton from "./button";
import Card from "./card";
import RichText from "./richText";
import QuestTextBox from "./textbox";
import SuggestionInput from "./SuggestInput";

const Form = (props) => {
  // const { mockData, formErrors, formSuccess, clearSucess } = props;
  //props
  const {
    formErrors,
    setShowFields,
    formSuccess,
    clearSucess,
    mockData,
    available,
    showFields,
    input,
    tags,
  } = props;
  //state
  const [pendingUI, setpendingUI] = useState(false);

  //Submit Handler
  const onSubmit = () => {
    if (tags?.length) props.onSubmit({ ...props.input, tags });
    else props.onSubmit({ ...props.input });
    setpendingUI(true);
  };

  useEffect(() => {
    if (formErrors || formSuccess) {
      const timer = setTimeout(() => {
        clearSucess();
        setpendingUI(false);
        return () => clearTimeout(timer);
      }, 1500);
    }

    if (formSuccess)
      toast.dark(<em className="suceess-green">{formSuccess.message}</em>, {
        toastId: formSuccess.id,
      });

    if (formErrors?.postError)
      toast.error(<em className="error-red">{formErrors.postError}</em>, {
        toastId: formErrors.id,
      });
  }, [formErrors, formSuccess, clearSucess]);

  return (
    <>
      {/* form header */}
      {mockData.header && (
        <Card
          additionalClasses={mockData.header.class}
          textAlign={mockData.header.textAlign}
        >
          {mockData.header.cardTitle &&
            createElement(
              mockData.header.cardTitle.ele,
              {},
              mockData.header.cardTitle.content
            )}
          {mockData.header.content ? mockData.header.content : ""}
        </Card>
      )}
      {/* Fields */}
      {mockData?.fields &&
        mockData.fields.map((field, index) => (
          <Card
            additionalClasses={`${field.class} + ${
              showFields < index ? "blur_content" : ""
            }`}
            style_={field.style_}
            textAlign={field.textAlign}
            key={index}
          >
            {field.cardTitle &&
              createElement(field.cardTitle.ele, {}, field.cardTitle.content)}
            {field.content ? field.content : ""}

            {field.fieldType === "textbox" ? (
              // Text Input Box
              <QuestTextBox
                placeHolder={field.input_field.placeholder}
                id={field.input_field.id}
                name={field.input_field.name}
                value={props?.input?.[field.input_field.id.split("_")[1]]}
                onChange={props.onChangehandler}
                error={props.formErrors?.[field.input_field.id.split("_")[1]]}
              />
            ) : field.fieldType === "textEditor" ? (
              // Rich Text Editor
              <RichText
                placeholder={field?.input_field?.placeholder}
                id={field?.input_field?.id}
                name={field?.input_field?.name}
                focus={field?.input_field?.focus}
                onChange={props.onChangehandler}
                value={props?.input?.[field.input_field.id.split("_")[1]]}
                error={props.formErrors?.[field.input_field.id.split("_")[1]]}
              />
            ) : (
              <>
                {/* Tag Search Box */}
                <SuggestionInput
                  placeHolder={field.input_field.placeholder}
                  id={field.input_field.id}
                  name={field.input_field.name}
                  className={field.input_field.class}
                  available={available}
                  tags={tags}
                  onChange={props.tagChange}
                  error={props.formErrors?.tags}
                />
                {/* anonymous flag */}
                <div className={field.Questionflag.class}>
                  <label
                    htmlFor={field.Questionflag.questTextBox.id}
                    title={field?.questTextBox?.title}
                  >
                    <QuestTextBox
                      type={field.Questionflag.questTextBox.type}
                      id={field.Questionflag.questTextBox.id}
                      name={field.Questionflag.questTextBox.name}
                      checked={
                        input?.[
                          field.Questionflag.questTextBox.id.split("_")[1]
                        ]
                      }
                      onChange={props.onChangehandler}
                      title={field.Questionflag.questTextBox.title}
                    />
                    {field.Questionflag.content}
                  </label>
                </div>
              </>
            )}

            {/* Next Button */}
            {showFields === index && field?.questButton && (
              <QuestButton
                id={field.questButton.id}
                value={field.questButton.value}
                onClick={() => {
                  setShowFields((prev) => ++prev);
                }}
                disabled={
                  field.fieldType === "textEditor"
                    ? input?.[field.input_field.id.split("_")[1]]?.length < 20
                    : field.fieldType === "textbox"
                    ? input?.[field.input_field.id.split("_")[1]]?.length < 1
                    : tags.length === 0
                }
              />
            )}
          </Card>
        ))}

      {/* formButton */}
      {mockData.formButton && (
        <div
          className={`${mockData.formButton.class} ${
            showFields < 4 ? "blur_content" : ""
          } `}
        >
          <QuestButton
            type={mockData.formButton.type}
            id={mockData.formButton.id}
            value={
              pendingUI
                ? mockData.formButton.pendingValue
                : mockData.formButton.value
            }
            disabled={pendingUI}
            onClick={onSubmit}
          />
        </div>
      )}
    </>
  );
};

export default Form;
