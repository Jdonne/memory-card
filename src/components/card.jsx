import React, { useState } from "react";
const Card = (props) => {
  // const [clicked, setClicked] = useState("");

  // const handleClicked = () => {
  //   if (clicked == "") {
  //     setClicked("clicked");
  //   } else if (clicked == "clicked") {
  //     console.log("game over");
  //   }
  // };

  return (
    <button onClick={props.handleCard} id={props.displayId}>
      {props.displayId}
    </button>
  );
};

export default Card;
