import Header from "../components/common/header";
import SideNav from "../components/common/sideNav";
import Chips from "../components/common/chips";
import moment from "moment";
import { useEffect, useState } from "react";
import List from "../components/question/List";
import Card from "../components/common/card";
import AnswerForm from "../components/question/AnswerForm";
import QuestButton from "../components/common/button";
import QuestModal from "../components/common/questModal";

const QuestionDetails = (props) => {
  //props
  const {
    questionId,
    get_Question,
    question,
    answers,
    cardAside,
    comments,
    questionDetail_mock,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  //hook
  useEffect(() => {
    get_Question(questionId);
  }, [questionId, get_Question]);

  const isOpenHandler = (data) => setIsOpen(data);

  return (
    <>
      {/* Navbar */}
      <Header {...props} Yoffset={59} />

      {/*  */}
      <div className="question-details-container ">
        <SideNav questionId={questionId} />
        <div className="question-detail-panel left-aside ">
          {/* Result Panel */}
          {question && typeof question === "string" ? (
            <div className="row">
              <div className="resultListHeader col-100">
                <div className="row ">
                  <div className="detail col-80">
                    <h2>{question}</h2>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {question ? (
                <>
                  <div className="row">
                    <div className="resultListHeader col-100">
                      <div className="row">
                        <div className="detail col-80">
                          <h2>{question.title}</h2>
                          <p>
                            <span className="moment">
                              <span>Asked:</span>
                              <strong>
                                {question.createdOn
                                  ? moment(question.createdOn).format(
                                      "MMMM Do YYYY"
                                    )
                                  : moment().format("MMMM Do YYYY")}
                              </strong>
                            </span>

                            <span className="moment">
                              <span>Modified:</span>
                              <strong>
                                {question.modifiedOn
                                  ? moment(question.modifiedOn).format(
                                      "MMMM Do YYYY"
                                    )
                                  : moment().format("MMMM Do YYYY")}
                              </strong>
                            </span>
                            <span className="moment">
                              <span>status:&nbsp;</span>

                              <Chips
                                style_={
                                  question.questionStatus === "open"
                                    ? "green"
                                    : "secondary"
                                }
                                element="span"
                                value={
                                  question.questionStatus === "open"
                                    ? "Open"
                                    : "Close"
                                }
                              />
                            </span>
                          </p>
                        </div>
                        <div className="col-20">
                          <QuestButton
                            value="@Turing"
                            theme="blue"
                            title="what's your answer?"
                            onClick={() => {
                              setModal(true);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row no-padding relative-content">
                    <div className="col-75">
                      <List
                        item={{ ...question, comments }}
                        type="question"
                        {...props}
                      />
                      {/* Answers */}
                      {answers && answers?.length > 0 ? (
                        <div>
                          <h3>{answers.length} Answers</h3>
                          {answers.map((ans, index) => (
                            <List
                              isOpen={isOpen}
                              setIsOpen={isOpenHandler}
                              item={ans}
                              key={index}
                              type="answer"
                              {...props}
                            />
                          ))}
                        </div>
                      ) : null}
                    </div>

                    {cardAside ? (
                      <div className="content-aside top-margin-aside">
                        {cardAside.map((card, index) => (
                          <Card style_={card.style_} key={index}>
                            <h4>{card.cardHeader}</h4>
                            {card?.cardBody
                              ? card.cardBody.map((c_body, index) => (
                                  <div
                                    className="row relative-content"
                                    key={index}
                                  >
                                    {c_body?.i_tag_class ? (
                                      <i className={c_body?.i_tag_class}></i>
                                    ) : null}
                                    {c_body?.p ? (
                                      <p className={c_body.p.class}>
                                        {c_body.p?.content
                                          ? c_body.p.content
                                          : ""}
                                      </p>
                                    ) : null}
                                  </div>
                                ))
                              : null}
                          </Card>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  {!isOpen && (
                    <div className="row no-padding ">
                      <div className="col-75">
                        <h3>Your Answer</h3>
                        <AnswerForm
                          {...props}
                          id="questionDetail-postAnswer"
                          formErrors={props.formErrors?.answer}
                          formSuccess={props.formSuccess?.answer}
                          AnswerForm={questionDetail_mock.PostAnswer}
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="row">
                  <div className="resultListHeader w-100">
                    <div className="detail w-80">
                      <h2>Loading...</h2>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <QuestModal
        open={modal}
        title="@Turing"
        setModal={setModal}
        body={
          <>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus corporis rerum accusamus neque doloribus aliquam
            tempore omnis. Ullam quasi nisi velit consectetur rem, vel impedit
            iusto alias quod minima ratione.
          </>
        }
        onConfirm={() => {
          setModal(false);
        }}
        deleteText="Close"
      />
    </>
  );
};

export default QuestionDetails;
