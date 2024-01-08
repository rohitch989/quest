import classNames from "classnames";
import React, { createElement } from "react";

const Chips = (props) => {
  const chipsClassNames = classNames(
    "chips",
    props.style_,
    props.additionalClasses
  );
  return props.element ? (
    createElement("span", { className: chipsClassNames }, props.value)
  ) : (
    <div
      className={chipsClassNames}
      disablehover={props.hover ? props.hover : "false"}
    >
      {props.value}
    </div>
  );
};
export default Chips;
