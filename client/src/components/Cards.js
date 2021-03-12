import "./Cards.css";

function Cards(props) {
  return (
    <div className="cards">
      {props.tools.map((tool, index) => {
        return (
          <div className="card" key={index}>
            <a href={tool.redirectTo}>
              <h2 className="title"> {tool.title} </h2>
            </a>
            <p className="content"> {tool.subTitle} </p>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
