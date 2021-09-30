import { useState } from "react";
import "./styles.css";

function Node({ column: col, row, isSelected }) {
  const [selected, setSelected] = useState(isSelected);

  return (
    <div
      onClick={() => {
        setSelected(!selected);
        console.log(selected);
      }}
      className={`node ${selected ? "selected" : ""} `}
    >
      <span className="gCost">{`C${col + 1}`}</span>
      <span className="hCost">{`R${row + 1}`}</span>
      <span className="fCost">{row + col}</span>
    </div>
  );
}

export default Node;
