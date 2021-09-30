import Node from "./Node/Node";
import "./styles.css";

function PathFinder({rows, columns}) {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < columns; col++) {
      currentRow.push([]);
    }
    grid.push(currentRow);
  }

  return (
    <div className="grid">
      {grid.map((row, row_idx) => {
        return (
          <div key={row_idx}>
            {row.map((node, col_idx) => (
              <Node key={col_idx} column={col_idx} row={row_idx} isSelected={false}></Node>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default PathFinder;
