// import { useState } from "react";
import PathFinder from "./components/PathFinder";

function App() {

  // const [rows, setRows] = useState(8);
  // const [cols, setCols] = useState(20);
  

  return (
    <>
      {/* <input type="number" onChange={setRows}></input> */}
      {/* <input type="number" onChange={setCols}></input> */}
      <PathFinder rows={8} columns={20}></PathFinder>
    </>
  );
}

export default App;
