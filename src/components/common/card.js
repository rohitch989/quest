import classNames from "classnames";

const Card = (props) => {
  const cardClassNames = classNames(
    "card",
    { "text-left": props.textAlign === "left" },
    { "text-right": props.textAlign === "right" },
    props.style_,
    props.additionalClasses
  );
  return <div className={cardClassNames}>{props.children}</div>;
};
export default Card;
