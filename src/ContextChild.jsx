import React from "react";
import { useData } from "./ContextApis";

function ContextChild() {
  let data = useData();
  return (
    <div>
      <h1>Child</h1>
      <h2>Name:{data.name}</h2>
      <h2>Age:{data.age}</h2>

      <button onClick={() => console.log(data)}> Click me</button>
    </div>
  );
}

export default ContextChild;
