import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF");

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={setColor} onChangeChildColor={setChildColor} childColor={childColor}/>
      <Child onChangeColor={setColor} onChangeChildColor={setChildColor} childColor={childColor}/>
    </div>
  );
}

export default Parent;
