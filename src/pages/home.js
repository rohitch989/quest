import Header from "../components/common/header";
// import Card from "../components/common/card";

import QuestButton from "../components/common/button";
import Search from "../components/Search";

const Home = (props) => {
  return (
    <>
      <Header {...props} />

      <div className="section-container full-height ">
        <div className="home-header ">
          <div className="section-header">
            <h1>Quest Site</h1>
          </div>
          <Search />
          <div className="ask-home">
            <QuestButton
              value="Ask Question"
              onClick={() => {
                props.navigate("/postQuestion");
              }}
            />
          </div>
        </div>
      </div>
      {/* //Below items can be added later */}
      {/* <div className="cards-section section-container">
        <Card>
          <img src="" alt="" />
          <p>
            Find the best answer to your technical question, help others answer
            theirs
          </p>
          <button>Join the Community</button>
        </Card>
        <Card style_="white">
          <img src="" alt="" />
          <p>
            Find the best answer to your technical question, help others answer
            theirs
          </p>
          <button>Join the Community</button>
        </Card>
      </div>
      <div className="section-holder">
        <p>Section Content</p>
      </div>
      <div className="cards-section section-container">
        <Card style_="green">
          <img src="" alt="" />
          <p>
            Find the best answer to your technical question, help others answer
            theirs
          </p>
          <button>Join the Community</button>
        </Card>
        <Card style_="white">
          <img src="" alt="" />
          <p>
            Find the best answer to your technical question, help others answer
            theirs
          </p>
          <button>Join the Community</button>
        </Card>
        <Card style_="blue">
          <img src="" alt="" />
          <p>
            Find the best answer to your technical question, help others answer
            theirs
          </p>
          <button>Join the Community</button>
        </Card>
      </div> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
