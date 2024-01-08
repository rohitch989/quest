import classNames from "classnames";

const QuestTextBox = (props) => {
  const textboxClassNames = classNames(
    "quest-input",
    typeof props.additionalClasses === "string" ? props.additionalClasses : ""
  );

  const onChangeHandler = (e) => {
    if (props.type === "checkbox") {
      props.onChange({ id: props.id, value: !props.checked });
    } else props.onChange({ id: props.id, value: e.target.value });
  };

  return (
    <>
      <input
        name={props.name}
        type={props.type ? props.type : "text"}
        id={props.id}
        placeholder={props.placeHolder ? props.placeHolder : ""}
        className={textboxClassNames}
        onChange={onChangeHandler}
        title={props.title}
        value={props.value || ""}
        checked={props.checked || false}
      />
      {props.enableIcon && (
        <i aria-hidden={true} className={props.iconClassName}></i>
      )}
      {props.error ? <em className="error-red blue">{props.error}</em> : null}
      {/* {tagContainer()} */}
    </>
  );
};

export default QuestTextBox;
