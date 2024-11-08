import React, { useCallback, useEffect, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("brown");

  const details = useCallback(() => {
    console.log("Calculating details...");
    return count * 10;
  }, [count]);
  return (
    <div>
      <h1 style={{ color }}>useCallback Hook</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setColor(color === "green" ? "red" : "green")}>
        Change Color
      </button>
      <button onClick={() => setCount(count + 1)}>Change Count</button>
      <h3>{details()}</h3>
      <GetCount details={details} />
    </div>
  );
}

function GetCount({ details }) {
  useEffect(() => {
    console.log("Details updated");
  }, [details]);
  return (
    <>
      <h1>Child Component</h1>
      <h2>{details()}</h2>{" "}
     
    </>
  );
}

export default UseMemo;
