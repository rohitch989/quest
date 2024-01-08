import React from "react";
import QuestButton from "../common/button";
import { useNavigate } from "react-router-dom";

const Author = (props) => {
  const { item, type, onEditClick, id } = props;
  const navigate = useNavigate();

  return (
    <div className="author-section">
      <div className="share">
        {props.share && (
          <QuestButton
            title={props.share}
            value={<i className="bi bi-share-fill"> </i>}
            id={"share-" + id}
            additionalClasses="right-margin-aside"
            theme="icons"
          />
        )}

        {props.edit && (
          <QuestButton
            title={props.edit}
            value={<i className="bi bi-pencil-square"></i>}
            id={"edit-" + id}
            theme="icons"
            additionalClasses="right-margin-aside"
            onClick={() =>
              type === "question" ? navigate("./edit") : onEditClick()
            }
          />
        )}
        {props.notification && (
          <QuestButton
            title="Click to receive notification for this question"
            additionalClasses="right-margin-aside"
            value={<i className="bi bi-bell-fill"></i>}
            theme="icons"
            id={"notification-" + id}
          />
        )}
        {props.delete && (
          <QuestButton
            title={props.delete}
            additionalClasses="right-margin-aside"
            value={<i className="bi bi-trash3-fill"></i>}
            theme="icons"
            id={"delete" + id}
            onClick={props?.onDelete}
          />
        )}
      </div>
      <div className="author">
        <img src="/userName.png" alt="Author" />
        <div>
          {item?.anonymousFlag ? (
            <span className="anonymous">Anonymous</span>
          ) : (
            <a href="./#">{item.userName ? "Author" : "Author"}</a>
          )}
          {/* <ol>/ */}
          {/* <li>0</li> */}
          {/* <li>10</li> */}
          {/* badges can be added after Day2*/}
          {/* </ol> */}
        </div>
      </div>
    </div>
  );
};

export default Author;
