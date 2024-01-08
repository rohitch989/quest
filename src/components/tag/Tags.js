import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Chips from "../common/chips";

const Tags = (props) => {
  const { getAllTags } = props;
  useEffect(() => {
    getAllTags();
  }, [getAllTags]);

  return (
    <>
      <div className="row">
        <div className="resultListHeader col-100">
          <div className="detail col-80">
            <h2>Tags</h2>
            <p>
              A tag is a keyword or label that categorizes your question with
              other, similar questions. Using the right tags makes it easier for
              others to find and answer your question.
            </p>
          </div>
        </div>
      </div>
      <div className="row no-padding">
        <div className="tags-container row">
          {props?.tags &&
            props.tags.map((tag) => (
              <div className="tag col-24" key={tag.tagId}>
                <div className="tag-header">
                  <Link to={`./${tag.tagName}/tagged/question`}>
                    <Chips value={tag.tagName} style_="secondary" />
                  </Link>
                </div>
                <div
                  className="tag-description"
                  dangerouslySetInnerHTML={{
                    __html: tag.tagInfo,
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Tags;
