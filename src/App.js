import React, { useState, useEffect } from "react";
import Card from "./components/card";
import Over from "./components/over";
import "./App.css";
import logo1 from "./img/01.jpg";
import logo2 from "./img/02.jpg";
import logo3 from "./img/03.jpg";
import logo4 from "./img/04.jpg";
import logo5 from "./img/05.jpg";
import logo6 from "./img/06.jpg";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const App = () => {
  const [display, setDisplay] = useState([
    { id: 1, clicked: "", img: logo1 },
    { id: 2, clicked: "", img: logo2 },
    { id: 3, clicked: "", img: logo3 },
    { id: 4, clicked: "", img: logo4 },
    { id: 5, clicked: "", img: logo5 },
    { id: 6, clicked: "", img: logo6 },
  ]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [over, setOver] = useState("hidden");

  const handleRandom = (e) => {
    let dummy = [...display];
    shuffle(dummy);
    setDisplay(dummy);
    console.log(display);
  };

  const handleClick = (e) => {
    let found = display.find((element) => element.id == e.target.id);
    let foundIndex = display.findIndex((obj) => obj.id == e.target.id);
    if (found.clicked === "") {
      let dummy = [...display];
      dummy[foundIndex].clicked = "clicked";
      setDisplay(dummy);
      handleRandom();
      setScore(score + 1);
    } else if (found.clicked === "clicked") {
      console.log("highscore " + highScore);
      setScore(0);
      let dummy2 = [
        { id: 1, clicked: "", img: logo1 },
        { id: 2, clicked: "", img: logo2 },
        { id: 3, clicked: "", img: logo3 },
        { id: 4, clicked: "", img: logo4 },
        { id: 5, clicked: "", img: logo5 },
        { id: 6, clicked: "", img: logo6 },
      ];
      shuffle(dummy2);
      console.log(dummy2);
      setDisplay(dummy2);
      setOver("");
      console.log(display);
      console.log("game over");
    }
  };
  const handleOver = () => {
    setOver("hidden");
  };

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div>
      <Over hidden={over} handleOver={handleOver} />
      <div>Score: {score}</div>
      <div> HighScore Score: {highScore}</div>
      {display.map((index, key) => (
        <Card
          key={key}
          handleCard={handleClick}
          img={index.img}
          displayId={index.id}
        />
      ))}
    </div>
  );
};

export default App;
