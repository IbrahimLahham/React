import "./Header.css";
<<<<<<< HEAD
import "./Breadcrumb";
import Breadcrumb from "./Breadcrumb";
=======


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


>>>>>>> dev
function Header(props) {
  const breadcrumbList = [
    { text: "לוח מעקב", url: "trackingBoard" },
    { text: "כלים פרלמנטריים", url: "parliamentaryTool" },
  ];
  return (
<<<<<<< HEAD
    <div>
      <div className="App-header">
        <div className="Header">
          <div className="row">
            <div id="logo" className="span4 clearfix">
              <h1>
                <a href="https://oknesset.org/">
                  <img
                    src="https://oknesset.org/static/img/oknesset-logo.png"
                    alt="oknesset-logo"
                  />
                  <span className="main-title">כנסת פתוחה</span>
                </a>
              </h1>
            </div>
          </div>
        </div>

        <ul className="nav nav-pills">
          <li id="nav-parties">
            <a href="/members/index.html">ח'כים וסיעות</a>
          </li>
          <li id="nav-committees">
            <a href="#">ועדות</a>
          </li>
          <li id="nav-committees">
            <a href="#">כלים פרלמנטריים</a>
          </li>
        </ul>
      </div>
      <Breadcrumb breadcrumbList={breadcrumbList} userType={1} />
=======
    <div className="Header">
      <div className="row">
        <div id="logo" className="span4 clearfix">
          <h1>
            <a href="https://oknesset.org/">
              <img
                src="https://oknesset.org/static/img/oknesset-logo.png"
                alt="oknesset-logo"
              />
              <span className="main-title">כנסת פתוחה</span>
            </a>
          </h1>
        </div>
      </div>

      <ul className="nav nav-pills">
        <li id="nav-parties">
          <a href="/members/index.html">ח'כים וסיעות</a>
        </li>
        <li id="nav-committees">
          <a href="#">ועדות</a>
        </li>
        <li id="nav-committees">
          <a href="#">כלים פרלמנטריים</a>
        </li>
      </ul>
      <section className="secondary-nav-bar">
        <div className="path">
          <a href="https://oknesset.org/"> דף הבית </a>/
          <Link to="/parliamentaryTool">כלים פרלמנטריים</Link>
        </div>
        
        <div className="user-links">
          <a className="disconnect" href="#">
            {" "}
            התנתק{" "}
          </a>
          |<a className="link"> {userType} </a>
        </div>
      </section>
>>>>>>> dev
    </div>
  );
}

export default Header;
