import React from "react";
import { useState } from "react";
import QuestTextBox from "./common/textbox";

const Search = () => {
  const [input, setInput] = useState({ search: "" });

  const onChangeHandler = (data) => {
    setInput((prev) => ({ ...prev, [data.id]: data.value }));
  };
  return (
    <div className="input-home">
      <QuestTextBox
        type="text"
        placeHolder="Search your question here..."
        enableIcon
        id="search"
        value={input.search}
        iconClassName="bi bi-search"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Search;
