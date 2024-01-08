import { combineReducers } from "redux";
import Question from "./slices/QuestionSlice";
import Answer from "./slices/AnswerSlice";
import Form from "./slices/FormSlice";
import Tag from "./slices/TagSlice";
const rootReducer = combineReducers({
  Question,
  Answer,
  Tag,
  Form,
});

export default rootReducer;
