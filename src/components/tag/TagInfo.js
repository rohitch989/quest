import moment from "moment";
import React from "react";
import { useEffect } from "react";
import Chips from "../common/chips";

const TagInfo = (props) => {
  const { get_TagInfo, tagId, tagInfo } = props;
  useEffect(() => {
    get_TagInfo(tagId);
  }, [get_TagInfo, tagId]);
  return tagInfo ? (
    <div className="row">
      <div className="column col-75">
        <div className="row background-gradient">
          <div className="resultListHeader col-100">
            <div className="detail">
              <h2>
                About&nbsp;
                <Chips value={tagInfo.tagName} style_="secondary" />
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: tagInfo.tagInfo }}
                className="tagInfo-description"
              />
            </div>
          </div>
        </div>
        <div className="row no-padding background-gradient ">
          <div className="col-100 tags-container">
            <div dangerouslySetInnerHTML={{ __html: tagInfo.tagDescription }} />
          </div>
        </div>
      </div>
      <div className="col-25">
        <div className="detail left-aside ">
          <div className="tag-detail">
            <h2>Stats </h2>
            <div>
              <p>
                <em>Created</em> :{" "}
                <strong>{moment().format("MMMM Do YYYY")}</strong>
              </p>
              <p>
                <em>Created By</em> :<strong>Test User</strong>
              </p>
              <p>
                <em>Question Tagged</em> :<strong>0 questions</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="resultListHeader col-100">
        <div className="detail">
          <h2>No Such Tag Exist</h2>
        </div>
      </div>
    </div>
  );
};

export default TagInfo;
