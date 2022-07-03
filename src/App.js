import { useContext, useRef } from "react";
import codeContext from ".";
import "./App.css";

function App() {
  const ref = useRef();
  const codeInfo = useContext(codeContext);
  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  };
  return (
    <div className="App">
      <h1>useContext</h1>
      <hr></hr>
      <p>{codeInfo.name}</p>
      <p>{codeInfo.age}</p>
      <h1>useRef</h1>
      <hr></hr>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>
    </div>
  );
}

export default App;
