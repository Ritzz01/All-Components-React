import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "./redux/store";

function Child2() {
  let data = useSelector((store) => store.userDetail);
  console.log(data);

  let dispatch = useDispatch();

  const [name, setName] = useState();
  return (
    <div>
      <h1> User Details</h1>
      <h2>Name: {data.name}</h2>
      <h2>Age: {data.age}</h2>
      <button onClick={() => dispatch({ type: "click" })}>Click</button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={(e) => dispatch({ type: "input", payload: name })}>
        Change
      </button>
    </div>
  );
}

export default Child2;
