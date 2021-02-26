import "./Header.css";

function Header(props) {
  let currentTabName = "כלים פרלמנטריים";
  let userType = "לוח מעקב";
  return (
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
          <span className="current-tab-name"> {currentTabName} </span>
        </div>

        <div className="user-links">
          <a className="disconnect" href="#">
            {" "}
            התנתק{" "}
          </a>
          |<a className="link"> {userType} </a>
        </div>
      </section>
    </div>
  );
}

export default Header;
