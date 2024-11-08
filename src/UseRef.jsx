import React, { useRef } from "react";

function UseRef() {
  let changeColor = useRef();
  function color(e) {
    let a = e.target.value;
    changeColor.current.style.backgroundColor = a;
    console.log(a);
  }


  return (
    <div>
      <h1>UseRef() hook</h1>

      <div
        ref={changeColor}
        style={{
          height: "400px",
          border: "2px solid black",
        }}
      >
        <input type="text" onChange={color} />

      
      </div>
    </div>
  );
}

export default UseRef;
