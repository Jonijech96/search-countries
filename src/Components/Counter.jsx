import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter % 2 === 0 && <h2>Par</h2>}
    </div>
  );
};
