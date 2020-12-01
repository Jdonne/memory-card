import React, { useState } from "react";
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

  const random = () => {
    let dummy = [...display];
    shuffle(dummy);
    setDisplay(dummy);
    console.log(display);
  };

  return (
    <div>
      {display.map((index, key) => (
        <button key={key} onClick={random}>
          {index.id}
        </button>
      ))}
    </div>
  );
};

export default App;
