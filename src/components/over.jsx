import React, { useState } from "react";
const Over = (props) => {
  return (
    <div onClick={props.handleOver} className={props.hidden}>
      GAME OVER <button>RESTART</button>
    </div>
  );
};

export default Over;
