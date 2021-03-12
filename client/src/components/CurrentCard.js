import React from "react";
import "./CurrentCard.css";
function CurrentCard(props) {
  switch (props.toolId) {
    case "3":
      return (
        <div className="naom">
          <h2>כינוס הכנסת בזמן הפגרה</h2>
          <p>
            נאום של <span>חבר כנסת</span>, בכל נושא ו באורך של בדקה (תלוי בטוב
            לבו של <span>יו"ר הכנסת</span> או <span>סגן יור הכנסת </span>המנהלים
            את הישיבה בפועל
          </p>
        </div>
      );
    case "4":
      return (
        <div className="naom">
          <h2>כינוס הכנסת בזמן הפגרה</h2>
          <p>
            נאום של <span>חבר כנסת</span>, בכל נושא ו באורך של בדקה (תלוי בטוב
            לבו של <span>יו"ר הכנסת</span> או <span>סגן יור הכנסת </span>המנהלים
            את הישיבה בפועל
          </p>
        </div>
      );
    default:
      return <div>hello</div>;
  }

  function ToolHTMLGenerator(toolId) {
    switch (toolId) {
      case "4":
        return (
          <div className="naom">
            <div></div>
            <h2>כינוס הכנסת בזמן הפגרה</h2>
            <p>
              נאום של <span>חבר כנסת</span>, בכל נושא ו באורך של בדקה (תלוי בטוב
              לבו של <span>יו"ר הכנסת</span> או <span>סגן יור הכנסת </span>
              המנהלים את הישיבה בפועל
            </p>
          </div>
        );
      case "2":
    }
  }
}

export default CurrentCard;
