import Header from "../components/common/header";
import Card from "../components/common/card";
import Chips from "../components/common/chips";
import QuestButton from "../components/common/button";
import SideNav from "../components/common/sideNav";

const SearchResults = (props) => {
  return (
    <>
      <div className="section-container box-shadow-default">
        <Header {...props} />
      </div>
      <div className="search-results-container">
        <SideNav />
        <div className="search-result-panel left-aside">
          <div className="resultListHeader">
            <div className="detail w-80">
              <h2>Search Results</h2>
              <p>Results for how to questions</p>
              <p>Search options not deleted</p>
            </div>
            <div className="content">
              <a href="./#">Advanced Search Tips</a>
              <QuestButton id="askQuestion" value="Ask Question" />
            </div>
          </div>
          <div className="resultList">
            <div className="detail"></div>
            <div className="content">
              <h2>
                In React Native, how can a user get to the previous page the
                user last visitted even after quitting the app?
              </h2>
              <p>
                After doing some reasearch on it, it seems like making use of
                navigation state in React navigation is good to get started. So,
                I was reading the officual document and tring to see what it's
                like on ...
              </p>
              <div>
                <Chips value="React" />
                <Chips value="JavaScript" />
                <Chips value="Angular" />
                <Chips value="NodeJS" />
                <Chips value="Java" />
              </div>
            </div>
          </div>
          <div className="resultList">
            <div className="detail">
              <p>0 Votes</p>
              <Chips style_="outline">1 Answer</Chips>
              <p>21 Views</p>
            </div>
            <div className="content">
              <h2>
                In React Native, how can a user get to the previous page the
                user last visitted even after quitting the app?
              </h2>
              <p>
                After doing some reasearch on it, it seems like making use of
                navigation state in React navigation is good to get started. So,
                I was reading the officual document and tring to see what it's
                like on ...
              </p>
              <div>
                <Chips value="React" />
                <Chips value="JavaScript" />
                <Chips value="Angular" />
                <Chips value="NodeJS" />
                <Chips value="Java" />
              </div>
            </div>
          </div>
          <div className="resultList">
            <div className="detail">
              <p>0 Votes</p>
              <Chips style_="outline">1 Answer</Chips>
              <p>21 Views</p>
            </div>
            <div className="content">
              <h2>
                In React Native, how can a user get to the previous page the
                user last visitted even after quitting the app?
              </h2>
              <p>
                After doing some reasearch on it, it seems like making use of
                navigation state in React navigation is good to get started. So,
                I was reading the officual document and tring to see what it's
                like on ...
              </p>
              <div>
                <Chips value="React" />
                <Chips value="JavaScript" />
                <Chips value="Angular" />
                <Chips value="NodeJS" />
                <Chips value="Java" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-aside">
          <Card style_="green">
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <QuestButton id="btnOne" value="Lorem ipsum dolor" />
          </Card>
          <Card style_="white">
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <QuestButton id="btnTwo" value="Lorem ipsum dolor" />
          </Card>
          <Card style_="blue">
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <QuestButton id="btnThree" value="Lorem ipsum dolor" />
          </Card>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
