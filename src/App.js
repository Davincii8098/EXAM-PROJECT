
import React from "react";
import useCounter from "./Custom Counter Hook/UseCounter";

function CounterApp() {
  const { count, increment, decrement, reset, setValue } = useCounter(0);

  return (
    <div className = "container">
    <div className = "counter-container">
      <h1>Counter Box</h1>
      <p>Count: {count}</p>

      <div className = "counter">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
      <div className="actions">
      <button onClick={reset}>Reset</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      </div>

    </div>
    </div>
  );
}

export default CounterApp;
