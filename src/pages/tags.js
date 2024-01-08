import React from "react";
import Header from "../components/common/header";
import SideNav from "../components/common/sideNav";
import QuestionTagged from "../components/tag/QuestionTagged";
import TagInfo from "../components/tag/TagInfo";
import ShowAllTags from "../components/tag/Tags";
const Tags = (props) => {
  const path = window.location.pathname;
  return (
    <>
      {/* Navbar */}
      <Header {...props} Yoffset={59} />
      <div className="question-details-container ">
        <SideNav />
        <div className="question-detail-panel left-aside ">
          {path === "/tags" && (
            <ShowAllTags getAllTags={props.getAllTags} tags={props.tags} />
          )}
          {path === "/tags/" + props.tagId + "/tagged/question" && (
            <QuestionTagged
              get_TagInfo={props.get_TagInfo}
              tagId={props.tagId}
              tagInfo={props.tagInfo}
            />
          )}
          {path === "/tags/" + props.tagId + "/info" && (
            <TagInfo
              get_TagInfo={props.get_TagInfo}
              tagId={props.tagId}
              tagInfo={props.tagInfo}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Tags;
