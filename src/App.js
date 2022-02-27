import React, { useState } from "react";
import "./styles.css";
const App = () => {
  let time = new Date().toLocaleTimeString();

  const [etime, setTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <h2 className="h22">Digital Clock with React Hook(Usestate)</h2>
      <h1>{etime}</h1>
    </>
  );
};

export default App;
