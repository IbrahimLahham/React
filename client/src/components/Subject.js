import React from "react";
import "./Subject.css";

import Logo from "./Images/tak_icon.PNG";

function Subject({ Icon, text }) {
  return (
    <div className="subject">
      <div className="subject-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="subject-text">
        <h4>{text}</h4>
      </div>
      
    </div>
  );
}

export default Subject;


// import React from "react";
// import "./Subject.css";
// function Subject({ Icon, text }) {
//   return (
//     <div className="subject">
//       <div className="subject__logo">
//         <img src={Icon} alt="" />
//       </div>
//       <div className="subject__text">
//         <h4>{text}</h4>
//       </div>
      
//     </div>
//   );
// }

// export default Subject;
