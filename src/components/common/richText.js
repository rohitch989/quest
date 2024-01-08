import React, { Component } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { toolbarProp } from "../../mock/rich-text";
class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  componentDidUpdate(pP) {
    if (pP.value !== this.props.value && this.props.value === "")
      this.setState({ editorState: EditorState.createEmpty() });
    if (!pP.value && this.props.value) {
      const contentBlock = htmlToDraft(this.props.value);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState });
      }
    }
  }
  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    this.props.onChange({ id: this.props.id, value: content });
  };
  render() {
    const { editorState } = this.state;
    const { id, name, tabIndex, error, placeholder } = this.props;
    return (
      <div className="editor" id={id} name={name} tabIndex={tabIndex}>
        <Editor
          editorState={editorState}
          handlePastedText={() => false}
          placeholder={placeholder}
          onEditorStateChange={this.onEditorStateChange}
          wrapperClassName="richText-wrapper"
          editorClassName="richText-editor"
          toolbarClassName="richText-toolbar"
          toolbar={toolbarProp}
        />
        {error ? <em className="error-red blue">{error}</em> : null}
      </div>
    );
  }
}
const RichText = (props) => {
  return <EditorContainer {...props} />;
};

export default RichText;
