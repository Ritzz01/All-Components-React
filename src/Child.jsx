import React from "react";
import store from "./redux/store";
import { useDispatch, useSelector } from "react-redux";

function Child() {
  let data = useSelector((store) => store.useCount);
  console.log(data);
  let dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {data}</h1>
      <button onClick={() => dispatch({type:'inc'})}>Add</button>
      <button onClick={() => dispatch({type:'dec'})}>Sub</button>
    </div>
  );
}

export default Child;
