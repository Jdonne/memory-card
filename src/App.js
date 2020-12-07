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
import logo7 from "./img/07.jpg";
import logo8 from "./img/08.jpg";
import logo9 from "./img/09.jpg";
import logo10 from "./img/10.jpg";
import logo11 from "./img/11.jpg";
import logo12 from "./img/12.jpg";

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
    { id: 7, clicked: "", img: logo7 },
    { id: 8, clicked: "", img: logo8 },
    { id: 9, clicked: "", img: logo9 },
    { id: 10, clicked: "", img: logo10 },
    { id: 11, clicked: "", img: logo11 },
    { id: 12, clicked: "", img: logo12 },
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
        { id: 7, clicked: "", img: logo7 },
        { id: 8, clicked: "", img: logo8 },
        { id: 9, clicked: "", img: logo9 },
        { id: 10, clicked: "", img: logo10 },
        { id: 11, clicked: "", img: logo11 },
        { id: 12, clicked: "", img: logo12 },
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
    <div className=" d-flex flex-column h-100">
      <Over className="h-100" hidden={over} handleOver={handleOver} />
      <h5 className="mx-auto mt-2 text-warning textborder">Memory Game</h5>

      <div className="container">
        <div className="row ">
          {" "}
          <div className=" col-md-8 mx-auto d-flex justify-content-between ">
            <div className="d-flex">
              <div className="ml-3 text-white textborder ">Score: {score}</div>
              <div className="ml-3 text-white textborder">
                {" "}
                Highscore: {highScore}
              </div>
            </div>
            <div className="msg">
              <p className="text-danger textborder text-left">
                Don't click the same image twice!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto d-flex flex-wrap align-content-start justify-content-center">
            {display.map((index, key) => (
              <Card
                key={key}
                handleCard={handleClick}
                img={index.img}
                displayId={index.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
