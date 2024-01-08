export const mock_postTag = {
  page: "postTag",
  header: {
    class: "suggestion",
    textAlign: "left",
    cardTitle: { ele: "h2", content: "Create Tag" },
    content: (
      <>
        <p>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. When you choose to create a new tag, you're asking
          a question in a topic that nobody before you (on this site, at least)
          ever has.
        </p>
        <h3>When creating your new tag, bear in mind that tags name :</h3>
        <ul>
          <li>must be no longer than 35 characters</li>
          <li>must use the character set a-z 0-9 + # - .</li>
        </ul>
      </>
    ),
  },
  fields: [
    {
      class: "post-tagName",
      fieldType: "textbox",
      textAlign: "left",
      style_: "white",
      cardTitle: { ele: "h3", content: "Tag Name" },
      content: <p>Be specific with your word</p>,
      input_field: {
        placeholder: "e.g. JavaScript",
        id: "postTag_tagName",
        name: "postTag_tagName",
      },
    },
    {
      class: "post-problem",
      fieldType: "textEditor",
      textAlign: "left",
      style_: "white",
      cardTitle: {
        ele: "h3",
        content: "Tag Info",
      },
      content: (
        <p>
          Give brief description about your tag, like where it will be used?
        </p>
      ),
      input_field: {
        placeholder: (
          <p>
            For questions about programming in ECMAScript (JavaScript/JS) and
            its different dialects/implementations (except for
            ActionScript).Note that JavaScript is NOT Java. Include all tags
            that are relevant to your question: e.g., [node.js], [jQuery],
            [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript],
            [svelte], etc. ",
          </p>
        ),
        id: "post_tagInfo",
        name: "post_tagInfo",
        focus: true,
      },
    },
    {
      textAlign: "left",
      style_: "white",
      fieldType: "textEditor",
      cardTitle: {
        ele: "h3",
        content: "Tag Description",
      },
      content: (
        <p>
          You can start writing by defining your word and what should the user
          do before using this this tag?
        </p>
      ),
      input_field: {
        placeholder: (
          <>
            eg.
            <p>JavaScript (a dialect of ECMAScript) is a high-level...</p>
            <ol>
              <h4>When asking a JavaScript question, you should: </h4>
              <li>
                Debug your JavaScript code (see Creativebloq, MDN, Google, &
                MSDN).
              </li>
              <li>
                Isolate the problematic code and reproduce it in a Stack
                Overflow code snippet or an external online environment such as
                JSFiddle, JS Bin or PasteBin (remember to also include the code
                in the question itself). When possible, prefer to use Stack
                Overflow code snippets over external sites.
              </li>
            </ol>
          </>
        ),
        id: "post_tagDescription",
        name: "post_tagDescription",
      },
    },
  ],
  formButton: {
    class: "questionForm-button",
    type: "submit",
    id: "tagPost-button",
    value: "Post my tag",
    pendingValue: "Posting...",
  },
};

export const mockPostQuestion = {
  page: "postQuestion",
  header: {
    class: "suggestion",
    textAlign: "left",
    cardTitle: { ele: "h2", content: "Writing a good question" },
    content: (
      <>
        <p>
          This is a question-answer community portal.Here, You’re ready to ask
          any Question.
        </p>
        <p>See the topics here to find a relevant site.</p>
        <h3>Notes</h3>
      </>
    ),
  },
  fields: [
    {
      textAlign: "left",
      class: "post-problem",
      style_: "white",
      fieldType: "textEditor",
      cardTitle: {
        ele: "h3",
        content: "What are the details of your problem?",
      },
      content: (
        <p>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </p>
      ),
      input_field: {
        placeholder: (
          <>
            eg.
            <p>
              Is there an R function for finding the index of an element in a
              vector?,
            </p>
          </>
        ),
        id: "post_questionDescription",
        name: "post_questionDescription",
        focus: true,
      },

      questButton: {
        id: "post_questionDescription-button",
        value: "Next",
      },
    },
    {
      textAlign: "left",
      style_: "white",
      fieldType: "textEditor",
      cardTitle: {
        ele: "h3",
        content: "What did you try and what were you expecting?",
      },
      content: (
        <p>
          Be explicit/ specific, as if you were asking a question to someone
          else.
        </p>
      ),
      input_field: {
        placeholder: (
          <>
            eg.
            <p>
              Is there an R function for finding the index of an element in a
              vector?,
            </p>
          </>
        ),
        id: "post_codeSnippet",
        name: "post_codeSnippet",
      },
      questButton: {
        id: "post_codeSnippet-button",
        value: "Next",
      },
    },
    {
      class: "post-title",
      textAlign: "left",
      fieldType: "textbox",
      style_: "white",
      cardTitle: { ele: "h3", content: "Title" },
      content: <p>Be specific while writing the question..</p>,
      input_field: {
        placeholder:
          "e.g. Is there an R function for finding the index of an element in a vector?",
        id: "postQuestion_title",
        name: "postQuestion_title",
      },
      questButton: {
        id: "postQuestion_title-button",
        value: "Next",
      },
    },
    {
      class: "post-tags",
      fieldType: "select",
      textAlign: "left",
      style_: "white",
      cardTitle: {
        ele: "h3",
        content: "Tags",
      },
      content: (
        <p>
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </p>
      ),
      input_field: {
        placeholder: "enter tags",
        id: "postQuestionTags",
        name: "postQuestionTags",
        class: "suggestInput-container",
      },
      questButton: {
        id: "postQuestionTags-button",
        value: "Next",
      },
      Questionflag: {
        class: "formQuestion-flag",
        questTextBox: {
          type: "checkbox",
          id: "postQuestion_anonymousFlag",
          name: "postQuestion_anonymousFlag",
          title: "post as anonymous",
        },
        content: "Post as Anonymous",
      },
    },
  ],

  formButton: {
    class: "questionForm-button",
    type: "submit",
    id: "questionPost-button",
    value: "Post my question",
    pendingValue: "Posting...",
  },
};

export const mock_EditQuestion = {
  page: "editQuestion",
  header: {
    class: "suggestion",
    textAlign: "left",
    cardTitle: { ele: "h2", content: "How to Edit" },
    content: (
      <>
        <ul>
          <li>fix grammatical or spelling errors</li>
          <li>clarify meaning without changing it</li>
          <li>correct minor mistakes</li>
          <li>add related resources or links</li>
          <li>always respect to the original author</li>
        </ul>
      </>
    ),
  },
  fields: [
    {
      class: "edit-title",
      textAlign: "left",
      fieldType: "textbox",
      style_: "white",
      cardTitle: { ele: "h3", content: "Title" },
      content: <p>Be specific while writing the question...</p>,
      input_field: {
        placeholder:
          "e.g. Is there an R function for finding the index of an element in a vector?",
        id: "editQuestion_title",
        name: "editQuestion_title",
      },
      questButton: {
        id: "editQuestion_title-button",
        value: "Next",
      },
    },
    {
      class: "edit-problem",
      textAlign: "left",
      style_: "white",
      fieldType: "textEditor",
      cardTitle: {
        ele: "h3",
        content: "What are the details of your problem?",
      },
      content: (
        <p>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </p>
      ),
      input_field: {
        placeholder: (
          <>
            eg.
            <p>
              Is there an R function for finding the index of an element in a
              vector?,
            </p>
          </>
        ),
        id: "edit_questionDescription",
        name: "edit_questionDescription",
        focus: true,
      },

      questButton: {
        id: "edit_questionDescription-button",
        value: "Next",
      },
    },
    {
      textAlign: "left",
      style_: "white",
      fieldType: "textEditor",
      cardTitle: {
        ele: "h3",
        content: "What did you try and what were you expecting?",
      },
      content: (
        <p>
          Be explicit/ specific, as if you were asking a question to someone
          else.
        </p>
      ),
      input_field: {
        placeholder: (
          <>
            eg.
            <p>
              Is there an R function for finding the index of an element in a
              vector?,
            </p>
          </>
        ),
        id: "edit_codeSnippet",
        name: "edit_codeSnippet",
      },
      questButton: {
        id: "edit_codeSnippet-button",
        value: "Next",
      },
    },
    {
      class: "edit-tags",
      textAlign: "left",
      fieldType: "select",
      style_: "white",
      cardTitle: {
        ele: "h3",
        content: "Tags",
      },
      content: (
        <p>
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </p>
      ),
      input_field: {
        placeholder: "enter tags",
        id: "postQuestionTags",
        name: "postQuestionTags",
        class: "suggestInput-container",
      },
      questButton: {
        id: "postQuestionTags-button",
        value: "Next",
      },
      Questionflag: {
        class: "formQuestion-flag",
        questTextBox: {
          type: "checkbox",
          id: "postQuestion_anonymousFlag",
          name: "postQuestion_anonymousFlag",
          title: "Post as Anonymous",
        },
        content: "Post as Anonymous",
      },
    },
  ],

  formButton: {
    class: "questionForm-button",
    type: "submit",
    id: "questionEdit-button",
    value: "Update Question",
    pendingValue: "Updating...",
  },
};
