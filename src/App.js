import React, { useState } from "react";
import Card from "./components/card";
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const App = () => {
  const [display, setDisplay] = useState([
    { id: 1, clicked: "" },
    { id: 2, clicked: "" },
    { id: 3, clicked: "" },
    { id: 4, clicked: "" },
    { id: 5, clicked: "" },
    { id: 6, clicked: "" },
  ]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleRandom = (e) => {
    let dummy = [...display];
    shuffle(dummy);
    setDisplay(dummy);
    console.log(display);
  };

  const handleClick = (e) => {
    let found = display.find((element) => element.id == e.target.id);
    let foundIndex = display.findIndex((obj) => obj.id == e.target.id);
    console.log(found);
    console.log(foundIndex);
    if (found.clicked === "") {
      let dummy = [...display];
      dummy[foundIndex].clicked = "clicked";
    } else if (found.clicked == "clicked") {
      console.log("game over");
    }
  };

  const handleCard = (e) => {
    handleClick(e);
    handleRandom(e);
  };

  return (
    <div>
      {display.map((index, key) => (
        <Card
          key={key}
          handleCard={handleCard}
          handleRandom={handleRandom}
          handleClick={handleClick}
          displayId={index.id}
        />
      ))}
    </div>
  );
};

export default App;
