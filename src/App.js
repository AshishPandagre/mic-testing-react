import { useCallback, useState } from "react";
import Child from "./Child";

function App() {

  const [value, setValue] = useState(0);
  const [allowChange, setAllowChange] = useState(0);

  const increment = useCallback(() => {
    if(allowChange) setValue((value) => value+1);
  }, [allowChange]);

  console.log('rendering APP', value);

  return (
    <div>
      {value} <br/>
      <button onClick={() => setAllowChange(!allowChange)}>allowChange</button> <br/>
      <Child data={69} click={increment}/>
    </div>
  );
}

export default App;