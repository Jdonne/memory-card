import React, { useState } from "react";
const Over = (props) => {
  return (
    <div
      onClick={props.handleOver}
      className={
        "overlap w-100 h-100 d-flex justify-content-center " + props.hidden
      }>
      <h1 className="text-center text-danger textborder h-25 w-75 align-self-center">
        IT'S OVER.. CLICK ANYWHERE TO PLAY AGAIN
      </h1>
    </div>
  );
};

export default Over;
