import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const QuestionTagged = (props) => {
  const { get_TagInfo, tagId, tagInfo } = props;
  useEffect(() => {
    get_TagInfo(tagId);
  }, [get_TagInfo, tagId]);

  return (
    <>
      <div className="row">
        <div className="resultListHeader w-100">
          <div className="detail w-80">
            <h2>Questions tagged [{tagInfo?.tagName}]</h2>
            <div
              dangerouslySetInnerHTML={{ __html: tagInfo.tagInfo }}
              className="tagInfo-description"
            />
            <br />
            <div>
              <div>
                <Link to={"/tags/" + tagId + "/info"}>Learn more...</Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionTagged;
