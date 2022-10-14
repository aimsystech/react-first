import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickFaceShow = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <button onClick={onClickFaceShow}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
