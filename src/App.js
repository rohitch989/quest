import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchResults from "./pages/searchResults.js";
import PostQuestion from "./container/PostQuestion";
import QuestionDetails from "./container/QuestionDetails";
import Home from "./container/Home";
import EditQuestion from "./container/EditQuestion";
import ScrollToTop from "./mock/customHook.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tag from "./container/admin/Tag.js";
import Tags from "./container/Tags";

const App = () => {
  return (
    <div className="App page-container">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="searchResults" element={<SearchResults />} />
          <Route exact path="admin/postTag" element={<Tag />} />
          <Route
            exact
            path="questions/:questionId"
            element={<QuestionDetails />}
          />

          <Route exact path="tags" element={<Tags />} />
          <Route exact path="tags/:tagId/info" element={<Tags />} />
          <Route exact path="tags/:tagId/tagged/question" element={<Tags />} />
          <Route exact path="postQuestion" element={<PostQuestion />} />
          <Route
            path="questions/:questionId/edit"
            exact
            element={<EditQuestion />}
          />
          {/* <Route exact path="questions" element={<Question {...props} />} /> */}
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
