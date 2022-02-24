import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, onChangeChildColor, childColor }) {
  return <div className="child" style={{ backgroundColor: childColor }} onClick={() => {
    onChangeColor(getRandomColor());
    onChangeChildColor(getRandomColor());
  }}/>;
}

export default Child;
