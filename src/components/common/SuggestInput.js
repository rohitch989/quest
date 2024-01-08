import React, { useState } from "react";

const SuggestInput = ({ id, available, onChange, tags, error, className }) => {
  //array to show suggestion
  const [suggestion, setSuggestion] = useState(available);

  //input value
  const [value, setValue] = useState("");

  //set Suggestion based on input
  const filterSuggestion = (e) => {
    setValue(e.target.value);

    const filtervalue = suggestion.filter((item) =>
      item.tagName.toLowerCase().includes(e.target.value.toLowerCase())
    );

    if (filtervalue.length === 0) {
      setSuggestion([{ tagId: 0, tagName: "Not Found" }]);
    } else if (tags.length !== 0) {
      const dummy = [...available];
      tags.forEach((item) => dummy.splice(dummy.indexOf(item), 1));
      setSuggestion(dummy);
    } else setSuggestion(available);
  };

  //put tag to input field
  const addTag = (item) => {
    if (item.tagName !== "Not Found") {
      onChange([...tags, item]);
      setSuggestion(suggestion.filter((en) => en.tagId !== item.tagId));
      setValue("");
    }
  };

  //remove a tage frominput
  const removeTag = (id) => {
    onChange(tags.filter((item) => item.tagId !== id));
    setSuggestion((prev) => [
      ...prev,
      ...available.filter((item) => item.tagId === id),
    ]);
  };

  return (
    <div className={`suggestinput ${className}`} id={id}>
      <ul className="tag_list">
        {tags &&
          tags.map((item, index) => (
            <li key={index}>
              {item.tagName}{" "}
              <i className="bi bi-x" onClick={() => removeTag(item.tagId)}></i>
            </li>
          ))}

        <input
          type="text"
          value={value}
          className="tag_input"
          placeholder="Add a tag"
          onChange={filterSuggestion}
        />

        <div className="suggest_wrapper">
          <ul className="tag-suggestion">
            {suggestion.map((result, index) => (
              <li key={index} onClick={(e) => addTag(result)}>
                {result.tagName}
              </li>
            ))}
          </ul>
        </div>
      </ul>
      <div className="tag-buttom">
        <em className="error-red blue">
          {error ? "Please provide atleast 1 Tag" : null}
        </em>
        <span>
          <span className="tag-nums">{tags?.length} </span>tags
        </span>
      </div>
    </div>
  );
};

export default SuggestInput;
