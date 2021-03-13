import "./Cards.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function Cards(props) {
  return (
    <div className="cards">
      {props.tools.map((tool, index) => {
        return (
          <div className="card" key={index}>
            {/* <a href={tool.redirectTo}> */}
            <Link to={tool.redirectTo}>
              <h2 className="title">{tool.title}</h2>
            </Link>
            <p className="content"> {tool.subTitle} </p>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
