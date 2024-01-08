import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuestButton from "./button";

const Header = (props) => {
  const [navBlock, setnavBlock] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > props?.Yoffset ? setnavBlock(true) : setnavBlock(false);
    });
    return () => window.removeEventListener("scroll", () => {});
  }, [props?.Yoffset]);

  return (
    <div
      className={`section-container box-shadow-default page-fixed ${
        navBlock ? "navblock" : ""
      }`}
    >
      <header className="app-header component-container">
        <Link to="/">
          <img src="/logo-d.png" className="logo" alt="logo" />
        </Link>

        <div className="login-link-container">
          {props?.askbutton && (
            <QuestButton
              value="Ask Question"
              onClick={() => {
                props.navigate("/postQuestion");
              }}
            />
          )}

          {/* // can be used for Day2 */}
          {/* <ul>
          <li>
            <Link to="searchResults">About</Link>
          </li>
          <li>
            <a href="./#">Products</a>
          </li>
          <li>
            <a href="./#">For Teams</a>
          </li>
          <li>
            <a href="./#">Login</a>
          </li>
          <li>
            <a href="./#">Signup</a>
          </li>
        </ul>
        <div className="search-container">
          <QuestTextBox
            type="text"
            name="search"
            placeHolder="Search..."
            id="main-search"
          />
        </div> */}
        </div>
      </header>
    </div>
  );
};
export default Header;
