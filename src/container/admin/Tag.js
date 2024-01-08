import React from "react";
import { connect } from "react-redux";

import TagForm from "../../pages/admin/tagForm";
import { useNavigate } from "react-router-dom";
import { mock_postTag } from "../../mock/mock_Form";
import { postTag, resetError, clearSucess } from "../../action/tag";

const Tag = (props) => {
  const navigate = useNavigate();
  const setprops = {
    askbutton: true,
    navigate,
    mockData: mock_postTag,
    ...props,
  };
  return <TagForm {...setprops} />;
};
const mapStateToProps = (state) => ({
  tags: state.Tag.tags,
  formErrors: state.Form.formError?.tag,
  formSuccess: state.Form.formSucess?.tag,
});
export default connect(mapStateToProps, { postTag, resetError, clearSucess })(
  Tag
);
