import React, { useReducer } from "react";

function countNo(state, action) {
  if (action.type == "inc") {
    return state + action.payload;
  } else if (action.type == "dec") {
    return state - action.payload;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(countNo, 0);
  return (
    <div>
      <h1>useReducer() hooks</h1>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "inc", payload: 1 })}>Add</button>
      <button onClick={() => dispatch({ type: "dec", payload: 1 })}>Sub</button>
      <button onClick={() => dispatch({ type: "inc", payload: 5 })}>
        Add5
      </button>
      <button onClick={() => dispatch({ type: "dec", payload: 5 })}>
        Sub5
      </button>
    </div>
  );
}

export default UseReducer;
