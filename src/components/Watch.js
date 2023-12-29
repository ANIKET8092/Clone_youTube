import React, { useState, useEffect } from "react";

const Watch = () => {
  const [second, setSecond] = useState(0);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState(null);

  const handleStart = () => {
    if (!timer) {
      const intervalId = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
      setTimer(intervalId);
    }
  };

  const handleStop = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const handleReset = () => {
    clearInterval(timer);
    setSecond(0);
    setMinutes(0);
    setHour(0);
    setTimer(null);
  };

  useEffect(() => {
    if (second >= 60) {
      setSecond(0);
      setMinutes((prev) => prev + 1);
    }
    if (minutes >= 60) {
      setMinutes(0);
      setHour((prev) => prev + 1);
    }
  }, [second, minutes]);

  return (
    <div className="">
      <h1 className=" border">
        {hour} - {minutes} - {second}
      </h1>

      <button className="ml-2 border border-gray-100" onClick={handleStart}>
        Start
      </button>
      <button className="ml-2 border border-gray-100" onClick={handleStop}>
        Stop
      </button>
      <button className="ml-2 border border-gray-100" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Watch;
