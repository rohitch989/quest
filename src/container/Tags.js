import React from "react";
import Tags from "../pages/tags";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllTags, get_TagInfo } from "../action/tag";

const TagsContainer = (props) => {
  const navigate = useNavigate();
  const { tagId } = useParams();

  const setprops = {
    navigate,
    askbutton: true,
    tagId,
    ...props,
  };
  return <Tags {...setprops} />;
};
const mapStatetoProps = (state) => ({
  tags: state.Tag.tags,
  tagInfo: state.Tag.tag,
  formErrors: state.Form.formError,
  formSuccess: state.Form.formSucess,
});
export default connect(mapStatetoProps, { getAllTags, get_TagInfo })(
  TagsContainer
);
