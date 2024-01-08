import { Link } from "react-router-dom";

const SideNav = (props) => {
  const onChangeHandler = (target) => {
    let path = window.location.pathname;

    if (path.match(target)) return "selected";
  };
  return (
    <>
      {/* Dummy  checkbox for sidebar collapse*/}
      <input type="checkbox" id="sidebar_toggle_check" />

      <div className="side-nav box-shadow-default" id="sideNav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tags" className={onChangeHandler("/tags")}>
              Tags
            </Link>
          </li>
          <li>
            <Link
              to={`/questions/${props.questionId ? props.questionId : 1}`}
              className={onChangeHandler("/questions")}
            >
              Questions
            </Link>
            {/* <ul> // Submenu structure
                            <li><a href="./#">Tags</a></li>
                            <li><a href="./#">Users</a></li>
                            <li><a href="./#">Companies</a></li>
                        </ul> */}
          </li>
        </ul>
      </div>
      <label htmlFor="sidebar_toggle_check" className="sidebar_toggle">
        <i className="bi bi-arrow-bar-left"></i>
        <i className="bi bi-arrow-bar-right"></i>
      </label>
    </>
  );
};
export default SideNav;
