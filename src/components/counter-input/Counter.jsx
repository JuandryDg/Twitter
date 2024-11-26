/* eslint-disable no-unused-vars */
import { useState } from "react";
import React from "react";
//declarar un estado

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Total : {counter}</h1>
      <button
        className="border p-2 mt-2"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}

export default Counter;
