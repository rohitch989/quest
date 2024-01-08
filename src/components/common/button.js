import classNames from "classnames";

const QuestButton = (props) => {
  const textboxClassNames = classNames(
    "quest-button",
    props.theme ? props.theme : "secondary",
    props.additionalClasses
  );

  const onClickHandler = (e) => {
    if (props.onClick) props.onClick();
  };
  return (
    <button
      type={props.type ? props.type : "button"}
      id={props.id}
      className={textboxClassNames}
      onClick={onClickHandler}
      disabled={props.disabled}
      title={props.title}
    >
      {props.value}
    </button>
  );
};

export default QuestButton;
