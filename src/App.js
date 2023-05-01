import React, { useState, useRef, useMemo }  from "react";
import "./style.css";

function fancyTimeFormat(duration) {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;

  return ret;
}

export default function App() {
  const [ now, setNow ] = useState(
    0
  );
  const interval = useRef(null);

  const handleStart = () => {
    interval.current = setInterval(()=> {
      setNow(pre => pre + 1)
    },10)
  }

  const handleStop = () => {
    clearInterval(interval.current)
  }

  const renderTime = useMemo(()=>{
    return fancyTimeFormat(now)
  },[now])

  return (
    <div>
      <h1>Time : {renderTime}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
